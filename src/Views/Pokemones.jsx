import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Pokemones() {
  
  const [pokemonesAPIs, setPokemonesAPIs] = useState([]);
  const [pokemon, setPokemon] = useState("");
  const navigate = useNavigate();
  
  const getPokemonesAPIs = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const get = await fetch(url);
    const {results} = await get.json();
    setPokemonesAPIs(results);
  }

  const verPokemon = async () => {
    if (pokemon) navigate(`/pokemon/${pokemon}`);
    else alert('Debe seleccionar un pokemon');
  }

  useEffect(() => {
    getPokemonesAPIs();
  }, []);

  return (
    <Container fluid>
      <h1>Seleccione un pokemon</h1>
      <br />
      <Row>
        <Col></Col>
        <Col>
          <Form.Select
            aria-label="Default select example" value={pokemon} onChange={({ target }) => setPokemon(target.value)}
          >
            <option>Pokemones</option>
            {pokemonesAPIs.map((pokemon, i) => (          
              <option key={i}>            
                <option>{pokemon.name}</option>
              </option>
            ))}
          </Form.Select>        
        </Col>
        <Col></Col>
      </Row>
      <br />
      <Row>
        <Col></Col>
        <Col>
          <Button variant="primary" onClick={ verPokemon }>Ver Detalle</Button>         
        </Col>
        <Col></Col>
      </Row>
        
    </Container>
  );
}