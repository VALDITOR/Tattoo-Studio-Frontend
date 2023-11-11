import React, { useState, useEffect } from "react";
import './Gallery.css'
import { bringTattoo } from '../../services/apiCalls';
import { Container, Row, Col } from "react-bootstrap";

export const Gallery = () => {
    const [characters, setCharacters] = useState([]);
  
    useEffect(() => {
      if (characters.length === 0) {
        bringTattoo()
          .then((results) => {
            setCharacters(results.data.results);
          })
          .catch((error) => console.log(error));
      }
    }, [characters]);
  
    return (
      <div className="GalleryDesign">
        {characters.length > 0 ? (
          <Container>
            <Row>
              {characters.map((character) => {
                return (
                  <Col sm={12} lg={6} xl={4} xxl={3} key={character.id}>
                    {/* {character.name} */}
                    <img src={character.image} alt={character.name} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        ) : (
          <div>aun no han venido</div>
        )}
      </div>
    );
  };
  