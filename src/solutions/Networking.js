import React, { Component } from 'react';
import ProgressiveImage from '../components/ProgressiveImage';
import { Wrapper } from './Styles';
import SideBar from '../components/SideBar';
import { Col, Row } from 'react-bootstrap';


export default class Networking extends Component {
    render() {
        return (
            <Wrapper>
                <div>
                    <h1>Networking</h1>
                    <ProgressiveImage
                        overlayClass={"car-img-compressed"}
                        className={"d-block w-100 car-img"}
                        overlaySrc={"/img/solutions/Networking_compressed.jpg"}
                        src="/img/solutions/Networking.jpg"
                    />
                </div>
                <Row>
                    <Col xs={9}>
                        <p> Get Your Network Up To Speed
                        Today’s enterprises are no longer confined to a single city, let alone a
                        single office building. Companies operate from multiple campuses and
                        geographic locations. They communicate with employees, customers and
                        partners scattered across the country and the world. And they rely on
                        their enterprise networks to keep the flow of information up and running
                        at the speed of business. That’s where Techpoint IT Solutions. comes in.
                        Whether building your LAN, WAN or remote-access network from the ground up,
                        or extending a network already in place, we’ll make sure your infrastructure
                        provides the robust reliability to support your technological requirements as
                        well as your business objectives. During our initial assessment, we’ll
                        evaluate your current network situation to identify any performance,
                        availability and security challenges. Using this information, we’ll design
                        and architect an enterprise network optimized to: <br /><br />
                        • Integrate seamlessly across all new and existing network components<br />
                        • Minimize costly downtime and lower overall costs<br />
                        • Maximize network capacity and availability<br />
                        • Securely converge data, voice and video<br />
                        • Embrace emerging technologies including VPN, voice and video over IP, mobile and wireless solutions<br />
                        • Leverage routing and switching to balance loads for maximum throughput and availability<br />
                        • Optimize the content delivery to conserve bandwidth and increase speed<br />
                        • Scale with your changing business needs<br />
                </p>
                    </Col>
                    <Col>
                        <SideBar />
                    </Col>
                </Row>
            </Wrapper>
        )
    }
}



