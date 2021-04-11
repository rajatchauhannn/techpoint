import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 1em;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(50px, auto);
  color: white;
`; 
export const About = () => (
  <GridWrapper>
    <h2>About Us</h2>
    <p>Techpoint IT Solutions. Successfully brings together customized IT solutions and comprehensive engineering expertise, and best-in-class products to offer solutions tailored to meet your organization’s unique business requirements.</p>
    <p>We assess, design, acquire, implement and support your IT hardware and software solutions. Techpoint IT Solutions.. serves mid-market, enterprise, public sector and educational organizations. Our goals are to help our clients minimize their cost structure, increase the effectiveness of their supply chain, secure their network, improve communications and develop a customized storage management solution.</p>
    <p>Techpoint IT Solutions.. offers deployment services, delivery capabilities and more throughout INDIA. Techpoint IT Solutions. has resources of far-reaching channel agreements, as well as both national and international service and delivery options, allowing us to deploy resources quickly and efficiently. This flexibility helps us ensure that our customers are receiving the information and resources they need to deal with all of their IT and business challenges.</p>
  </GridWrapper>
)