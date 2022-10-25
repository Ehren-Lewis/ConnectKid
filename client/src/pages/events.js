
import React from "react";
import Sidebar from "../components/Sidebar/index";
import EventFeatureCard from "../components/cards/eventFeatureCard";
import EventCard from "../components/cards/eventCard";
import { useQuery } from "@apollo/client";
import { ALL_EVENTS } from "../utils/apollo/queries";
import { Row, Col, Container } from "react-bootstrap";
import eventBanner from "../assets/images/eventBanner.jpg";

export default function Events({ eventCards, featuredCard }) {

  const token = localStorage.getItem("_id");
  if (!token) {
    return <h1 style={{padding: "600px 0", textAlign: "center"}}>Please log in or sign up to view events </h1>
  }
  const { loading, err, data } = useQuery(ALL_EVENTS);

  const styleBackground = {
    backgroundImage: `url(${eventBanner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    paddingBottom: "50px",
  };

  if (loading) {
    return <p>Loading</p>;
  }

  if (err) {
    return <p>Err</p>;
  }

  const events = data.events;

  const firstFeaturedIndex = events
    .map((event) => event.isFeatured)
    .indexOf(true);

  const firstFeaturedItem = data.events[firstFeaturedIndex];
  const eventsWithoutFeatured = data.events.filter(
    (e, i) => i !== firstFeaturedIndex
  );

  return (
    <div style={styleBackground}>
    

      <Container>
        <Row>
          <Col xs={12} md={12} className="mx-auto" justify-content-center>
            <EventFeatureCard className="text-center"
              title={firstFeaturedItem.name}
              date={firstFeaturedItem.date}
              text="Chicken Tacos is our signature event we provide to help get people used to ConnectKids! This event is held on the first Tuedsday night at 7:00pm CT"
              // location needs to be added
            />
          </Col>
        </Row>

        <Row>
          {eventsWithoutFeatured.map((currentEvent, index) => (
            <Col xs={12} sm={12} md={6} lg={4} key={index}>
              <EventCard
                eventId={currentEvent._id}
                title={currentEvent.name}
                date={currentEvent.date}
                location={currentEvent.location}
                attendees={currentEvent.attendees}
                eventDetails={currentEvent.eventDetails}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
    }