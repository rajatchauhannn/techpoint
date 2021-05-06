import React, { Component } from 'react';
import ProgressiveImage from '../components/ProgressiveImage';
import { Wrapper } from './Styles';

export default class Security extends Component {
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
                <p>Your Information, Secured
                In the age of the expanded enterprise,
                organizations amass massive amounts of information
                about their employees, customers, products,
                R&D efforts, financial health and more.
                Not only is this information highly sensitive, it
                is also extremely vulnerable — especially when
                ferried back and forth across your network. Protecting
                this information from leakage, unauthorized access,
                malicious use and sabotage is critical to your business’s bottom line. So is finding the right security partner.
                At Techpoint IT Solutions., we’ll help you understand
                just how vulnerable your data is — and what threats
                it’s up against. Our on-staff Certified Information
                Systems Security Professionals (CISSPs) expose and
                eliminate risks, helping you select and implement
                solutions that protect your — and your customers’ —
                data. More than the best products, we’ll work with you
                to develop and implement best practices for securing your
                network and infrastructure, as well as the integrity,
                confidentiality and availability of the information they transport.
                </p>
            </Wrapper>
        )
    }
}



