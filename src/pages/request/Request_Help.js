import { Form, Row, Button, Container } from "react-bootstrap"

export default function Request_Help() {
  return (
    <div>
      <Row>
        <h1 id="hero_main_text" className="centered_text">
          Request Help
        </h1>
      </Row>
      <Container
        className="grey_background rounded_corners"
        style={{
          padding: "20px",
          color: `#500000`,
          marginTop: "20px",
          marginBottom: "66px",
        }}
      >
        <Row style={{ marginTop: "20px" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Overall Objectives</Form.Label>
              <Form.Select>Test Prep</Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description of Problem:</Form.Label>
              <Form.Control as="textarea" aria-label="text area" />
            </Form.Group>
            <Form.Select aria-label="Default select example" className="mb-3">
              <option>Preferred Learning Method</option>
              <option value="1">Online</option>
              <option value="2">Face-To-Face</option>
              <option value="3">Phone</option>
            </Form.Select>
            <Form.Select aria-label="Default select example" className="mb-3">
              <option>
                Preferred Meeting Time (<em>optional</em>)
              </option>
              <option value="1">Morning</option>
              <option value="2">Afternoon</option>
              <option value="3">Evening</option>
            </Form.Select>
            <Button type="submit">Submit</Button>
          </Form>
        </Row>
      </Container>
    </div>
  )
}
