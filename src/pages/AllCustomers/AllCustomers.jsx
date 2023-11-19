import React, { useState, useEffect } from "react";
import "./AllCustomers.css";
import { getAllCustomers } from "../../services/apiCalls";
import { Container, Row, Col } from "react-bootstrap";


export const AllCustomers = () => {
    const [customers, setCustomers] = useState([]);
  
    useEffect(() => {
      if (customers.length === 0) {
        getAllCustomers()
          .then((results) => {
            setCharacters(results.data.data);
            console.log(results.data.data);
          })
          .catch((error) => console.error(error));
      }
    }, [customers]);

    return (
        <div className="customersDesign">
          {customers.length > 0 ? (
            <Container>
              <Row>
                {customers.map((customers) => {
                  return (
                    <Col sm={12} lg={6} xl={2} xxl={2} key={customers.id}>
                        {customers.name}
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
}