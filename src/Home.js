import React from 'react';
import { Card, CardDeck, Carousel, Row } from 'react-bootstrap';
import { Enquiry } from './components/Enquiry';
import { Heading, GridWrapper } from './HomeStyles';
import ProgressiveImage from './components/ProgressiveImage';


export const Home = (props) => (
  <>
    <GridWrapper>
      <Carousel fade className="carousel-img">
        <Carousel.Item>
          <ProgressiveImage
            overlayClass = {"car-img-compressed"}
            className={"d-block w-100 car-img"}
            overlaySrc={"img/stock_1_compressed.jpg"}
            src="img/stock_1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <ProgressiveImage
            overlayClass = {"car-img-compressed"}
            className={"d-block w-100 car-img"}
            overlaySrc={"img/stock_2_compressed.jpg"}
            src="img/stock_2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <ProgressiveImage
            overlayClass = {"car-img-compressed"}
            className={"d-block w-100 car-img"}
            overlaySrc={"img/stock_3_compressed.jpg"}
            src="img/stock_3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <ProgressiveImage
            overlayClass = {"car-img-compressed"}
            className={"d-block w-100 car-img"}
            overlaySrc={"img/stock_4_compressed.jpg"}
            src="img/stock_4.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <ProgressiveImage
            overlayClass = {"car-img-compressed"}
            className={"d-block w-100 car-img"}
            overlaySrc={"img/stock_5_compressed.jpg"}
            src="img/stock_5.jpg"
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
      <Carousel className="carousel-solutions">
        <Carousel.Item>
          <CardDeck>
            <Card className="card-solutions" href="/">
              <Card.Img variant="top" src="img/virtualization.jpg" />
              <Card.Body>
                <a href="/virtualization/" class="stretched-link"> </a>
                <Card.Title>Virtualization</Card.Title>
                <Card.Text>
                  Many organizations have embraced the concept of virtualization,
                  only to encounter the myriad of complexities inherent in managing
                  a virtual environment. At Techpoint IT Solutions., we not only ease
                  the transition to virtualization, but our expertise extends well beyond
                  the application layer, enabling us to optimize the way you manage — and
                  maximize — your entire environment.
            </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-solutions">
              <Card.Img variant="top" src="img/security.jpg" />
              <Card.Body>
                <a href="/security/" class="stretched-link"> </a>
                <Card.Title>Security</Card.Title>
                <Card.Text>
                  In the age of the expanded enterprise,
                  organizations amass massive amounts of
                  information about their employees, customers,
                  products, R&D efforts, financial health and more.
                  Not only is this information highly sensitive,
                  it is also extremely vulnerable — especially when
                  ferried back and forth across your network.
                  Protecting this information from leakage,
                  unauthorized access, malicious use and sabotage
                  is critical to your business’s bottom line.
                  So is finding the right security partner.
            </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-solutions">
              <Card.Img variant="top" src="img/storage.jpg" />
              <Card.Body>
                <a href="/storage/" class="stretched-link"> </a>
                <Card.Title>Storage</Card.Title>
                <Card.Text>
                  Today’s organizations confront an explosion of data
                  captured and collected from a multitude of sources
                  across and beyond the enterprise. Managing and
                  controlling this massive amount of information presents a
                  significant challenge, especially for businesses whose data
                  growth far exceeds internal resources
            </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Carousel.Item>
        <Carousel.Item>
          <CardDeck>
            <Card className="card-solutions">
              <Card.Img variant="top" src="img/networking.jpg" />
              <Card.Body>
                <a href="/networking/" class="stretched-link"> </a>
                <Card.Title>Networking</Card.Title>
                <Card.Text>
                  Today’s enterprises are no longer confined to a single city,
                  let alone a single office building. Companies operate from
                  multiple campuses and geographic locations. They communicate
                  with employees, customers and partners scattered across the
                  country and the world. And they rely on their enterprise networks
                  to keep the flow of information up and running at the speed of
                  business. That’s where Techpoint IT Solutions. comes in.
            </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-solutions">
              <Card.Img variant="top" src="img/enterprise.jpg" />
              <Card.Body>
                <a href="/enterprise management/" class="stretched-link"> </a>
                <Card.Title>Enterprise Management</Card.Title>
                <Card.Text>
                  Your technology assets offer tremendous business potential.
                  The challenge is: how do you identify and tap into that potential,
                  given the complexity of today’s IT environments and the strain on
                  internal resources? Techpoint IT Solutions. has your solution. With
                  expertise extending across every point of the enterprise your
                  infrastructure touches, we can help you maximize your technology
                  assets to achieve your business goals.
            </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-solutions">
              <Card.Img variant="top" src="img/cloud.jpg" />
              <Card.Body>
                <a href="/cloud solutions" class="stretched-link"> </a>
                <Card.Title>Cloud Solutions</Card.Title>
                <Card.Text>
                  Empower your business with Cloud Solutions from Techpoint IT Solutions..
                  Designed to enable your organization with more agile, cost effective
                  technologies, our Cloud services and solutions span many different
                  topologies and varying levels of capability to address your organization's
                  present-day need.
            </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Carousel.Item>
      </Carousel>
      <Card className="carousel-logos">
        <Card.Img variant="top" src="img/clients4.png" className="logos" />
        <Card.ImgOverlay>
          <Card.Body>
            <Card.Text>
              <p>
                Some of Our Major Clients <br />
          • Central Electronics Ltd<br />
          • Solar Energy Corporation of India<br />
          • Delhi Metro Rail Corporation Ltd<br />
          • CBIC, Goods and Service Tax<br />
          • CTH Urbana Pvt Ltd<br />
          • National Bal Bhawan<br />
          • Northern Railway<br />
          • Vigyan Prasar Science<br />
              </p>
            </Card.Text>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
      <Row ><Heading><h1>Quick Enquiry:</h1></Heading></Row>
      <Row>
        <Carousel className="carousel-text">
        <Carousel.Item>
            <p>
              <h1>Corporate office:</h1><br />
              E-6, 2nd Floor, Block-E, <br />
              Main Road, Kalkaji,  <br />
              New Delhi-110019 <br />
              <br />
              Mb:+91 965010 1559  <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 997171 2955  <br />
              Ph: +91 11-47025933 <br />
              <br />
              Email: kuldeep@techpointitsolutions.in <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ujjwal@techpointitsolutions.in
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              <h1>Registered office:</h1><br />
              171, 2nd Floor, Sector-5, <br />
              Vasundhara, Ghaziabad, <br />
              Uttar Pradesh-201012. <br />
              <br />
              Mb:+91 965010 1559 <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 997171 2955  <br />
              <br />
              Ph: +91 120-4575953 <br />
              Email: kuldeep@techpointitsolutions.in <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ujjwal@techpointitsolutions.in
            </p>
          </Carousel.Item>
        </Carousel>
        <Enquiry />
      </Row>
    </GridWrapper>
  </>
)