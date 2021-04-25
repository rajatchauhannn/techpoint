import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';


const GridWrapper = styled.div`
  padding-top: 50px;
  width: 1000px;
  margin: 0 auto;
  display: grid;
  color: white;
  grid-gap: 50px 50px;

  .carousel{
    border-radius: 20px;
    position: relative;
    padding:10px;
    height: 320px;
    width: 1020px;

  }
  img {
    border-radius: 20px;
    width:1000px;
    height:300px;
  }
`;
export const Home = (props) => (
  <>
    <GridWrapper>
      <Carousel>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src="stock_1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src="stock_2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <p>Successfully brings together customized IT solutions and comprehensive engineering expertise, and best-in-class products to offer solutions tailored to meet your organization’s unique business requirements.</p>
      <p>We assess, design, acquire, implement and support your IT hardware and software solutions. Techpoint IT Solutions. Serves mid-market, enterprise, government PSU and public sector and educational organizations. </p>
      <p>Our goals are to help our clients minimize their cost structure, increase the effectiveness of their supply chain, secure their network, improve communications and develop a customized storage management solution.</p>
      <p>Techpoint IT Solutions. Offers deployment services, delivery capabilities and more throughout INDIA. Techpoint IT Solutions. Has a resource of far-reaching channel agreements, as well as both national and international service and delivery options, allowing us to deploy resources quickly and efficiently. This flexibility helps us ensure that our customers are receiving the information and resources they need to deal with all of their IT and business challenges...</p>

    </GridWrapper>
  </>
)