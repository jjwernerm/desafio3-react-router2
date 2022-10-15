import { Container, Row, Col} from 'react-bootstrap';

export default function Home() {
  
  return (
    <Container fluid>
      <h1>Bienvenido maestro pokemón</h1>
      <br />
      <Row>
        <Col></Col>
        <Col className="picachu">
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}