import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Personajes() {

  const [pokemonAPIs, setPokemonAPIs] = useState([]);
  // const [pokemonImgAPIs, setPokemonImgAPIs] = useState([]);
  const { pokemon } = useParams();

  const url = ("https://pokeapi.co/api/v2/pokemon/" + pokemon);
  
  const getPokemonAPIs = async () => {
    const get = await fetch(url);
    const {stats} = await get.json();
    setPokemonAPIs(stats);
  }

  // const getPokemonImgAPIs = async () => {
  //   const get = await fetch(url);
  //   const {sprites} = await get.json();
  //   setPokemonImgAPIs(sprites);
  //   console.log(sprites.front_default);
  // }

  useEffect(() => {
    getPokemonAPIs();
    // getPokemonImgAPIs();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{ pokemon }</Card.Title>
              <Card.Text>
                {pokemonAPIs.map((pokemon, i) => (
                  <div className="info-flex" key={i}>
                    <div className="bold-font">- {pokemon.stat.name}</div>
                    <div>: {pokemon.base_stat}</div>
                  </div>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>         
        </Col>
        <Col></Col>
      </Row>

      

      {/* <Card style={{ width: '18rem' }}>
        {pokemonAPIs.map((pokemonImg, a) => (          
          <Card.Img variant="top" key={a} src={pokemonImg.front_default} />
        ))}
        <Card.Body>
          <Card.Title>{ pokemon }</Card.Title>
          <Card.Text>
            Prueba...
          </Card.Text>
        </Card.Body>
      </Card> */}
    </Container>
  );
}