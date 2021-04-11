import React from 'react';
import styled from 'styled-components';


const Heading = styled.div`

    font-size: 30px;
`;

const GridWrapper = styled.div`
    width: 100px;
    margin: 0 20%;
    
    display: grid;
    color: white;
    justify-content: right;
    grid-gap: 50px 50px;
  
`;


export const Contact = (props) => (
    <>
    <GridWrapper>

      <Heading>Contact Us</Heading>
      <p>Corporate office:
            E-6, 2nd Floor, Block-E,
            Main Road, Kalkaji, 
            New Delhi-110019
            <hr></hr>
            Mb:+91 965010 1559 
                +91 997171 2955 
            Ph: +91 11-47025933
            Email: kuldeep@techpointitsolutions.in
            ujjwal@techpointitsolutions.in</p>
      <p>Registered office:
            171, 2nd Floor, Sector-5,
            Vasundhara, Ghaziabad,
            Uttar Pradesh-201012.
            <hr></hr>
            Mb:+91 965010 1559 
                +91 997171 2955 
            Ph: +91 120-4575953
            Email: kuldeep@techpointitsolutions.in
            ujjwal@techpointitsolutions.in</p>
      
    </GridWrapper>
    </>

)