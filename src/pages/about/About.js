import { Container } from "react-bootstrap"
import About_Background from "./About_Background"
import About_Hero from "./About_Hero"
import Mission_Statement from "./Mission_Statement"
import Our_Team from "./Our_Team"

export default function About() {
  return (
    <Container>
      <About_Hero />
      <Mission_Statement />
      <About_Background />
      <Our_Team />
    </Container>
  )
}
