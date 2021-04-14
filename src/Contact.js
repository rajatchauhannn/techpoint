import React from 'react';
import styled from 'styled-components';
import MapContainer from './components/GoogleMap';

const Map = styled.div`

`;

const Row = styled.div`
    diplay:flex;
    color: white;
    justify-content: center;
`;

const Column = styled.div`
    flex: 50%;
    width: 50%;
    padding: 100px;
`;

const Heading = styled.div`

    font-size: 30px;
    color: white;
`;

export const Contact = (props) => (
    <>
        <Heading>Contact Us</Heading>
        <Row>
            <Column>
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
            <Column>
            <Map>
                <MapContainer />
            </Map>
            </Column>
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
            </Column>
        </Row>

    </>

)
