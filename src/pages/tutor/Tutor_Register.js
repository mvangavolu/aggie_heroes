import React, { useState } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, registerTutor } from "../../firebase"
import { useNavigate } from "react-router-dom"
import { isDisabled } from "@testing-library/user-event/dist/utils"

function Tutor_Register() {
  const navigate = useNavigate()

  const subjects = [
    "English",
    "Math",
    "Literature",
    "Health",
    "Biology",
    "Calculus",
    "Physics",
    "Algebra",
    "Geometry",
    "Anatomy",
    "Physiology",
  ]
  const meetTimes = ["Morning", "Afternoon", "Evening"]
  const [user, loading, error] = useAuthState(auth)
  const [buttonDisable, setButtonDisable] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setButtonDisable(true)

    try {
      const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())
      if (formDataObj) {
        await registerTutor(
          user.uid,
          formDataObj.userSubject,
          formDataObj.Afternoon === "on" ? true : false,
          formDataObj.Evening === "on" ? true : false,
          formDataObj.Morning === "on" ? true : false
        )
        alert("Success")
        navigate("/dashboard", { replace: true })
        return true
      }
    } catch (err) {
      setButtonDisable(false)
      console.error(err)
      alert(err.message)
      return false
    }
  }

  subjects.sort()
  meetTimes.sort()
  var meetTimesList = meetTimes.map((time) => {
    return (
      <Form.Check
        type="switch"
        key={time}
        id="custom-switch"
        label={time}
        name={time}
      />
    )
  })
  var subjectsList = subjects.map((name) => {
    return (
      <option key={name} value={name}>
        {name}
      </option>
    )
  })

  return (
    <Container className="my-5">
      <Row className="centered_text">
        <h1>Become a Hero</h1>
      </Row>
      {user ? (
        <>
          <Row className="centered_text">
            <Col xs={4} />
            <Col xs={4}>
              <p>
                We match tutors with students looking for help by subject.
                Please enter subjects you offer tutoring in.
              </p>
            </Col>
            <Col xs={4} />
          </Row>
          <Row>
            <>
              <Col xs={4} />
              <Col xs={4}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Select name="userSubject" aria-label="Default select">
                      <option>Select Tutoring Subject</option>
                      {subjectsList}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Preferred Meeting Time:</Form.Label>
                    {meetTimesList}
                  </Form.Group>

                  <Button disabled={isDisabled} variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
              <Col xs={4} />
            </>
          </Row>
        </>
      ) : (
        <div className="centered_text my-5">
          <h5 className="red_text">Must be logged in to become a tutor</h5>
          <p>
            Please either <a href="/register">register</a> or{" "}
            <a href="/login">sign in</a>
          </p>
        </div>
      )}
    </Container>
  )
}

export default Tutor_Register
