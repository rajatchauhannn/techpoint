import React, { Component } from 'react';
import ProgressiveImage from '../components/ProgressiveImage';
import { Wrapper } from './Styles';

export default class Storage extends Component {
    render() {
        return (
            <Wrapper>
                <ProgressiveImage
                    overlayClass={"car-img-compressed"}
                    className={"d-block w-100 car-img"}
                    overlaySrc={"/img/stock_1_compressed.jpg"}
                    src="/img/stock_1.jpg"
                    alt="First slide"
                />
                <p> Data, Data Everywhere
                Today’s organizations confront an explosion of data captured and
                collected from a multitude of sources across and beyond the enterprise.
                Managing and controlling this massive amount of information presents a
                significant challenge, especially for businesses whose data growth far
                exceeds internal resources
                Culling from decades of practical experience implementing information
                technology and systems, Techpoint IT Solutions. will help you manage and
                mine your data to make faster, better business decisions while reducing
                costs. Beyond delivering storage solutions, we deliver the expertise to:
                • Maximize your current storage investments and minimize storage costs
                • Classify and assign data to appropriate storage solutions based on the
                level of sensitivity and accessibility requirements
                • Maximize the cost- and space-savings of data de-duplication
                • Manage your digital assets, determining what to preserve and what to delete
                • Provision who has access to what data, under what conditions
                • Back up your data and secure it from unauthorized access and malicious use
                • Define and implement processes to control data growth
                • Access and leverage information to improve efficiencies and operations
                </p>
            </Wrapper>
        )
    }
}



