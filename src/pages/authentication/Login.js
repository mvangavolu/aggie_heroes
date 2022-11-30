import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import {
  auth,
  loginWithGoogle,
  loginWithEmailandPassword,
} from "../../firebase"
import { useNavigate } from "react-router-dom"
import { Container, Row, Form, Button, Col } from "react-bootstrap"

function Login() {
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) return
    if (user) navigate("/dashboard", { replace: true })
    if (error) {
      console.error(error)
      alert(error.message)
      return
    }
  }, [user, loading])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())

    if (formDataObj.userEmail && formDataObj.userPassword) {
      // After login the user will automatically be pushed to dashboard
      loginWithEmailandPassword(formDataObj.userEmail, formDataObj.userPassword)
    }
  }

  return (
    <Container>
      <Row>
        <div className="centered_text">
          <h1>Login</h1>
        </div>
      </Row>
      <Row>
        <Col xs={4} />
        <Col xs={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="userEmail"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="userPassword"
              />
            </Form.Group>
            <Button className="mb-3" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <a href={"/forgot"}>Forgot Password?</a>
        </Col>
        <Col xs={4} />
      </Row>
      <Row className="centered_text mt-4 mb-2">
        <h4>Or Login with</h4>
      </Row>
      <Row className="centered_text mb-4">
        <Col xs={4} />
        <Col xs={4}>
          <Button onClick={loginWithGoogle} variant="danger">
            <i class="fa-brands fa-google mx-2"></i>
            Login with Google
          </Button>
        </Col>
        <Col xs={4} />
      </Row>
      <Row className="centered_text mb-5">
        <a href="/register">I need to create an account</a>
      </Row>
    </Container>
  )
}

export default Login
