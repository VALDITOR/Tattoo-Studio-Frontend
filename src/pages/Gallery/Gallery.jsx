import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { bringTattoo } from "../../services/apiCalls";
import { Container, Row, Col } from "react-bootstrap";

export const Gallery = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (characters.length === 0) {
      bringTattoo()
        .then((results) => {
          setCharacters(results.data.data);
          console.log(results.data.data);
        })
        .catch((error) => console.error(error));
    }
  }, [characters]);

  return (
    <div className="galleryDesign">
      {characters.length > 0 ? (
        <Container>
          <Row>
            {characters.map((character) => {
              return (
                <Col sm={12} lg={6} xl={2} xxl={2} key={character.id}>
                  {/* {character.name} */}
                  <img className='avatarCharacter' src={character.image} alt={character.name} />
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