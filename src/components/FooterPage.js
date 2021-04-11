import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
export const FooterPage = () => {
  return (
    <Box>
      <h4 style={{ color: "#91A937", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Techpoint IT Solutions: Deal in Desktops, Laptops, All in One PCs, Servers, Workstations, Printers, UPS and Software’s. Cloud Co-Location and Security Services, etc.
      </h4>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Business</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">+91 9650101559</FooterLink>
            <FooterLink href="#">0120 457-5953</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default FooterPage;