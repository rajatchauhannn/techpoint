import React from "react";
import {
  FooterText,
  Box,
  FooterHeading
} from "./FooterStyles";

export const FooterPage = () => {
  return (
    <>
      <Box>
        <FooterHeading>
          Techpoint IT Solutions: Deal in Desktops, Laptops, All in One PCs, Servers, Workstations, Printers, UPS and Software’s. Cloud Co-Location and Security Services, etc.
      </FooterHeading>
      </Box>
      <FooterText>   © 2019 - {new Date().getFullYear()} Techpoint IT Solutions. All Rights Reserved. | <a href="/">Privacy Policy</a> | <a href="/"> Terms of Use</a>
      </FooterText>
     
    </>
  );
};
export default FooterPage;
