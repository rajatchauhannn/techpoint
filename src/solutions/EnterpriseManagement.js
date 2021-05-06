import React, { Component } from 'react';
import ProgressiveImage from '../components/ProgressiveImage';
import { Wrapper } from './Styles';


export default class EnterpriseManagement extends Component {
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
                <p> Turn Technology Assets Into Business Advantages
                Your technology assets offer tremendous business potential.
                The challenge is: how do you identify and tap into that potential,
                given the complexity of today’s IT environments and the strain on internal
                resources? Techpoint IT Solutions. has your solution. With expertise extending across every point of the enterprise your infrastructure touches, we can help you maximize your technology assets to achieve your business goals.
                We begin by understanding your environment — how it works, and how
                it can work even better. We’ll track, monitor and report on the myriad
                of information and technology assets across the enterprise, and determine
                whether you’re utilizing them to your full advantage. Then we’ll help you
                put in place the proper tools, resources and processes to optimize the
                performance of every last asset. These best practices reach beyond your
                IT environment to improve enterprise-wide operations. You’ll be better
                prepared to run your company more effectively, make faster and better
                business decisions, and manage change.
                </p>
            </Wrapper>
        )
    }
}



