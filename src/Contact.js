import React from 'react';
import styled from 'styled-components';
// import MapContainer from './components/GoogleMap';

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
    padding-left: 100px;
`;

const Heading = styled.div`

    font-size: 30px;
    color: white;
`;

export const Contact = (props) => (
    <>

        <Row>
            <Column>
                <Heading>Contact Us</Heading>
                <br />
                <p>Corporate office:
                    E-6, 2nd Floor, Block-E, <br />
                    Main Road, Kalkaji,  <br />
                    New Delhi-110019 <br />
                    <br />
                    Mb:+91 965010 1559  <br />
                        +91 997171 2955  <br />
                    Ph: +91 11-47025933 <br />
                    Email: kuldeep@techpointitsolutions.in <br />
                    ujjwal@techpointitsolutions.in</p>
                    <br />
                    <br />
                <Column>
                    <Map>
                        {/* <MapContainer /> */}
                    </Map>
                </Column>
                <p>Registered office: <br />
                    171, 2nd Floor, Sector-5, <br />
                    Vasundhara, Ghaziabad, <br />
                    Uttar Pradesh-201012. <br />
                    <br />
                    Mb:+91 965010 1559 <br />
                        +91 997171 2955  <br />
                    Ph: +91 120-4575953 <br />
                    Email: kuldeep@techpointitsolutions.in <br />
                    ujjwal@techpointitsolutions.in</p>
            </Column>
        </Row>

    </>

)
