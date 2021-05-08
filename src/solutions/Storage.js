import React, { Component } from 'react';
import ProgressiveImage from '../components/ProgressiveImage';
import { Wrapper } from './Styles';
import SideBar from '../components/SideBar';
import { Col, Row } from 'react-bootstrap';

export default class Storage extends Component {
    render() {
        return (
            <Wrapper>
                <div>
                    <h1>Storage</h1>
                    <ProgressiveImage
                        overlayClass={"car-img-compressed"}
                        className={"d-block w-100 car-img"}
                        overlaySrc={"/img/solutions/Storage_compressed.jpg"}
                        src="/img/solutions/Storage.jpg"
                    />
                </div>
                <Row>
                    <Col xs={9}>
                        <p> Data, Data Everywhere
                        Today’s organizations confront an explosion of data captured and
                        collected from a multitude of sources across and beyond the enterprise.
                        Managing and controlling this massive amount of information presents a
                        significant challenge, especially for businesses whose data growth far
                        exceeds internal resources
                        Culling from decades of practical experience implementing information
                        technology and systems, Techpoint IT Solutions. will help you manage and
                        mine your data to make faster, better business decisions while reducing
                        costs. Beyond delivering storage solutions, we deliver the expertise to: <br /><br />
                        • Maximize your current storage investments and minimize storage costs<br />
                        • Classify and assign data to appropriate storage solutions based on the
                        level of sensitivity and accessibility requirements<br />
                        • Maximize the cost- and space-savings of data de-duplication<br />
                        • Manage your digital assets, determining what to preserve and what to delete<br />
                        • Provision who has access to what data, under what conditions<br />
                        • Back up your data and secure it from unauthorized access and malicious use<br />
                        • Define and implement processes to control data growth<br />
                        • Access and leverage information to improve efficiencies and operations<br />
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



