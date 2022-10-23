import React from "react";
import FeatureCard from "../components/cards/featureCard";
import BasicCard from "../components/cards/card";
// import Sidebar from "../components/Sidebar";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";


import backgroundImage from "../assets/images/peopleLaughing.jpg";
import { useQuery } from "@apollo/client";
import { WEEKLY } from "../utils/apollo/queries";


export default function Landing() {
  let index = Math.floor(Math.random() * 12);

  const { loading, err, data } = useQuery(WEEKLY);
  // const weekly = data?.weekly || [];
  if (loading) {
    return <p>Loading</p>;
  }

  if (err) {
    return <p>Err</p>;
  }
  // console.log(weekly);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height: "max-content",
    paddingBottom: "400px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Container fluid className="text-center" style={backgroundStyle}>
      <Row style={{paddingTop: "300px"}}>
        <Col xs={12}>
          <h1 className="">Connect Kids</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <h6 className="">Helping connect kids of all kinds</h6>
        </Col>
      </Row>
{/* 
      <Row style={{marginLeft: "0px"}}>
        <Col>
        <h3>Events</h3>
        </Col>
      </Row> */}

      <Row style={{paddingBottom: "400px"}}>
        <Col>
          <p>Connect your kids through our events!</p>
        </Col>
      </Row>

    </Container>
  );
}

