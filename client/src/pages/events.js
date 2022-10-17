// import React from "react";
// import Sidebar from "../components/Sidebar/index";
// import FeatureCard from "../components/cards/featureCard";
// import EventCard from "../components/cards/eventCard";
// import { useQuery } from "@apollo/client";
// import { ALL_EVENTS } from "../utils/apollo/queries";

// // import eventImage from "../assets/images/event.jpg"; 
// import Stack from "react-bootstrap/Stack";

// import { Row, Col, Container } from "react-bootstrap";
// import eventBanner from "../assets/images/eventBanner.jpg"


// // export default function Events({eventCards, featuredCard}) {


// //   const { loading, err, data } = useQuery(ALL_EVENTS);

// //   const styleBackground = {
// //     backgroundImage: `url(${eventBanner})`,
// //     backgroundPosition: "center",
// //     backgroundRepeat: "no-repeat",
// //     paddingBottom: "50px"
// //   }

// //   if (loading) {
// //     return <p>Loading</p>;
// //   }

// //   if (err) {
// //     return <p>Err</p>;
// //   }

// //   const events = data.events;
// //   console.log(events);


// // export default function Events({ eventCards, featuredCard }) { 
//   // const { loading, err, data } = useQuery(ALL_EVENTS);
//   // const events = data?.events || []; 
//   // const backgroundLayout = { 
//   //   backgroundImage: `url(${eventImage})`, 
//   //   height: "max-content", 
//   //   paddingBottom: "200px", 
//   // }; 
//   // return ( 
//   //   <Container fluid className="text-center" style={backgroundLayout}> 
//   //    <Row className="align-items-center" style={{ paddingTop: "100 px" }}> 
//   //   <Col>
//   //   <Stack gap={1}> 
//   //   <div 
//   //   xs={12} 
//   //   md={5} 
//   //   style={{minHeight: "200px", minWidth:"100px"}} 
//   //   > 
//   //   <Card style={{minHeight:"200px", minWidth:"200px"}}> 
//   //   <featureCard /> 
//   //   </Card> 
//   //   </div> 
//   //   <div> 
//   //     <Card style={{minHeight: "200px", minWidth:"200px"}}> 
//   //     <BasicCard /> 
//   //     </Card> 
//   //     </div> 
//   //     </Stack> 
//   //       </Col> 
//   //       <Col xs={12} md={5} style={{minHeight: "100px", minWidth: "100px"}}> 
//   //       <Card style={{minHeight:"400px", minWidth: "200px"}}> 
//   //       <BasicCard /> 
//   //       </Card> 
//   //       </Col> 
//   //       </Row> 
//   //       </Container> 
//   //       ); 
//   //       } 
  

  
//   //  events is array of events
//  //if (loading) {
//   //  return <p>Loading</p>;
//   //} 
  


//   const firstFeaturedItem = data.events[firstFeaturedIndex];
//   const eventsWithoutFeatured = data.events.filter(

//     (e, i) => i !== firstFeaturedIndex
//   );

//   return (
//     <div style={styleBackground}>
//       <Sidebar />

//       <Container >
//         <Row>
//           <Col xs={12} md={12} className="mx-auto" justify-content-center>
//             <FeatureCard className="text-center"
//               title={firstFeaturedItem.name}
//               date={firstFeaturedItem.date}
//               text="This is our first featured event!"
//               // locatio needs to be added
//             />
//           </Col>
//         </Row>

//         <Row>
//           {eventsWithoutFeatured.map((currentEvent, index) => (
//             <Col xs={12} sm={12} md={6} lg={4} key={index}>
//               <EventCard
//               eventId={currentEvent._id}
//                 title={currentEvent.name}
//                 date={currentEvent.date}
//                 location={currentEvent.location}
//                 attendees={currentEvent.attendees}
//                 eventDetails={currentEvent.eventDetails}
//               />
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
//     }

import React from "react";
import Sidebar from "../components/Sidebar/index";
import EventFeatureCard from "../components/cards/eventFeatureCard";
import EventCard from "../components/cards/eventCard";
import { useQuery } from "@apollo/client";
import { ALL_EVENTS } from "../utils/apollo/queries";
import { Row, Col, Container } from "react-bootstrap";
import eventBanner from "../assets/images/eventBanner.jpg";

export default function Events({ eventCards, featuredCard }) {
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
              text="This is our first featured event!"
              // locatio needs to be added
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