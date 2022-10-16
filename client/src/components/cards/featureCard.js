import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { WEEKLY } from "../../utils/apollo/queries";
// import { Player } from "video-react";
// import "node_modules/video-react/dist/video-react.css";

const FeatureCard = ({ author, quoteDay, quoteOfTheDay, tableTopics, conversationStarters }) => {

  return (
    // <Card className="text-center col-9 border" style={{marginTop: "200px"}}>
    // <Card.Body>
    //     <Card.Title><u>{props.title}</u></Card.Title>
    //     <Card.Subtitle>{props.date}</Card.Subtitle>
    //     <Card.Text>{props.time}</Card.Text>

    //     <Card.Text>{props.text}</Card.Text>

    // </Card.Body>
    // </Card>

    // <Container fluid>

    // <Row className="justify-content-around" style={{marginTop: "200px"}}>

    // <Col xs={12} md={5} style={{minHeight: "200px", minWidth: "200px"}}>
    <Card className="text-center">
      <Card.Body>
        <Card.Title>
          <h5> {conversationStarters}</h5>
          <p>{tableTopics}</p>
        </Card.Title>
        <Card.Subtitle>
          <h6><i> {quoteOfTheDay}</i></h6>
          <i><text>{quoteDay}</text></i>
        </Card.Subtitle>
        <Card.Subtitle>
          <p> {author}</p>

        </Card.Subtitle>

        {/* <Card.Text><Player
          playsInline
          poster="/assets/poster.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        /></Card.Text> */}

      </Card.Body>
    </Card>

    // </Col>
    // </Row>

    // </Container>
  );
};

export default FeatureCard;
