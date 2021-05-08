import React, { Component } from 'react';
import ProgressiveImage from '../components/ProgressiveImage';
import { Wrapper } from './Styles';
import { Col, Row } from 'react-bootstrap';
import SideBar from '../components/SideBar';

export default class CloudSolutions extends Component {
    render() {
        return (
            <Wrapper>
                <div>
                    <h1>Cloud Solutions</h1>
                    <ProgressiveImage
                        overlayClass={"car-img-compressed"}
                        className={"d-block w-100 car-img"}
                        overlaySrc={"/img/solutions/Cloud Solutions_compressed.jpg"}
                        src="/img/solutions/Cloud Solutions.jpg"
                    />
                </div>
                <Row>
                    <Col xs={9}>
                        <p> Leverage the Hybrid Cloud
                        Empower your business with Cloud Solutions from Techpoint IT Solutions..
                        Designed to enable your organization with more agile, cost effective
                        technologies, our Cloud services and solutions span many different
                        topologies and varying levels of capability to address your
                            organization's present-day need.<br /><br />
                            • Higher utilization of resources<br />
                            • Significantly decrease time to complete service requests<br />
                            • Financially and technically better solutions for risk mitigation and
                            increased business agility<br />
                            • Easily migrate to your hybrid cloud solution based on our proven assessment process
                            Email info@techpointitsolutions.com
                            to know more about our cloud solutions.<br />
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



