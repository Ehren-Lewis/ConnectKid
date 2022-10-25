import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import backgroundImage from "../assets/images/eventBackground.jpg";
import "../style/aboutstyle.css";

const AboutInformation = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    // height: "max-content",
    height:"100%",
    paddingBottom: "300px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  };

  return (
    <Container fluid className="text-center" style={backgroundStyle}>
      <Row className="justify-content-around">
        <Col
          xs={11}
          md={5}
          className="border shadow bg-light"
          style={{ minHeight: "200px", minWidth: "200px", marginTop: "200px" }}
        >
          <h2>Mission & Values</h2>
          <br></br>
          <h3>We're on a mission to bring families together</h3>
          <br></br>
          <p>
            We value inclusion and accessibility for all kids and parents. Our
            team seeks to provide transparent information about events local to
            the Dallas, Texas area. We empower families to know what to expect
            at events so they can worry less about logistics and more about
            making friends and integrating with their local community.
          </p>
        </Col>
        <Col
          xs={11}
          md={5}
          className="border shadow bg-light"
          style={{ minHeight: "200px", minWidth: "200px", marginTop: "200px"  }}
        >
          <h2>The Connectors Team Members</h2>
          <ul style={{ listType: "none" }}>
            <dd>
              <a href="https://github.com/SabrinaC043" target="_blank" rel="noopener noreferrer">
                Sabrina Carrion
              </a>
            </dd>
            <dd>
              <a href="https://github.com/Ehren-Lewis" target="_blank" rel="noopener noreferrer">
                Ehren Lewis
              </a>
            </dd>
            <dd>
              <a href="https://github.com/BrettMiller47" target="_blank" rel="noopener noreferrer">
                Brett Miller
              </a>
            </dd>
            <dd>
              <a href="https://github.com/jeffbone95" target="_blank" rel="noopener noreferrer">
                Jeffery Willingham
              </a>
            </dd>
            <dd>
              <a href="https://github.com/MikeTigray" target="_blank" rel="noopener noreferrer">
                Micheale Abay
              </a>
            </dd>
            <dd>
              <a href="https://github.com/vianvianc" target="_blank" rel="noopener noreferrer">
                Vian Charbonneau
              </a>
            </dd>
            <dd>
              <a href="https://github.com/GranSpencer09" target="_blank" rel="noopener noreferrer">
                Spencer Gran
              </a>
            </dd>
          </ul>
        </Col>
      </Row>

      <Row className="justify-content-around">
        <Col
          xs={11}
          md={5}
          className="border shadow bg-light"
          style={{ minHeight: "200px", minWidth: "200px", marginTop: "200px"  }}
        >
          <h2>Who We Are</h2>
          <h3>Us Here at ConnectKids are just like you!</h3>
          <p>
            We either have kids or some of us plan to have kids one day. We
            desire a community where we can take our kids (or future kids) to
            without having to worry if it's accessible, or if our kids won't
            know anyone there.
          </p>
        </Col>

        <Col
          xs={11}
          md={5}
          className="border shadow bg-light"
          style={{ minHeight: "200px", minWidth: "200px",marginTop: "200px"  }}
        >
          <h2>What We Provide</h2>
          <h3>We provide an easy way to track events</h3>
          <p>
            We Use our event sourcing algorithms to find and provide events in
            an easy to digest format, as well as setting up attendence for each
            event so you don't have to worry about who is or isn't coming.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutInformation;
