import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import {
  auth,
  loginWithGoogle,
  registerWithEmailandPassword,
} from "../../firebase"
import { Link, useNavigate } from "react-router-dom"
import { Container, Row, Form, Button, Col } from "react-bootstrap"

function Register() {
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) return
    if (user) navigate("/dashboard", { replace: true })
  }, [user, loading])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())

    if (
      formDataObj.userEmail &&
      formDataObj.userPassword &&
      formDataObj.userName
    ) {
      // After registration the user will automatically be pushed to dashboard
      registerWithEmailandPassword(
        formDataObj.userName,
        formDataObj.userEmail,
        formDataObj.userPassword
      )
    }
  }

  return (
    <Container>
      <Row>
        <div className="centered_text">
          <h1>Register</h1>
        </div>
      </Row>
      <Row>
        <Col xs={4} />
        <Col xs={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="userName"
              />
            </Form.Group>

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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col xs={4} />
      </Row>
      <Row className="centered_text my-4">
        <h4>Or Register with</h4>
      </Row>
      <Row className="centered_text mb-5">
        <Col xs={4} />
        <Col xs={4}>
          <Button onClick={loginWithGoogle} variant="danger">
            <i class="fa-brands fa-google mx-2"></i>
            Google
          </Button>
        </Col>
        <Col xs={4} />
      </Row>
    </Container>
  )
}

export default Register
