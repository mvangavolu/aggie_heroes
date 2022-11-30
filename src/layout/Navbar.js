import { Container, Navbar, Nav } from "react-bootstrap"
import logo from "../images/ah_logo.png"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { auth, db, logOut } from "../firebase"
import { query, collection, where, getDocs, doc } from "firebase/firestore"

export default function AHNavbar() {
  const [user, loading, error] = useAuthState(auth)
  const [name, setName] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    if (loading) return
    if (user) {
      fetchUserName()
    }
  }, [user, loading])

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setName(doc.data().name)
      })
    } catch (err) {
      console.error(err)
      alert("An error occured while fetching user data")
    }
  }

  return (
    <Container>
      <Navbar expand="lg">
        <img
          src={logo}
          className="m-3"
          width="45"
          //   height="45"
          alt="Aggie Heroes Logo"
        />
        <Navbar.Brand id="brand" className="me-auto" href="/">
          Aggie Heroes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href={"/about"}>About Us</Nav.Link>
            <Nav.Link href={"/find"}>Find A Hero</Nav.Link>
            <Nav.Link href={"/tutor_sign_up"}>Become A Tutor</Nav.Link>
            {user ? (
              <>
                <Nav.Link href={"/dashboard"}>{name}'s Dashboard</Nav.Link>
                <Nav.Link
                  onClick={() => {
                    logOut()
                    setTimeout(() => {
                      navigate("/", { replace: true })
                    }, "250")
                  }}
                >
                  Signout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href={"/login"}>Login</Nav.Link>
                <Nav.Link href={"/register"}>Sign Up</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}
