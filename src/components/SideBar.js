import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .list-group-item {
        color: #fff;
        background-color: rgba(127, 127, 125, 0.4);
        &:hover {
            transition: 0.2s ease
            background-color: rgba(145, 169, 55, 0.4);
        }
    }
`;


export default class SideBar extends Component {
    render() {
        return (
            <Styles>
                <ListGroup>
                    <ListGroup.Item action href="/virtualization">Virtualization</ListGroup.Item>
                    <ListGroup.Item action href="/networking" >Networking</ListGroup.Item>
                    <ListGroup.Item action href="/storage">Storage</ListGroup.Item>
                    <ListGroup.Item action href="/security">Security</ListGroup.Item>
                    <ListGroup.Item action href="/enterprise management">Enterprise Management</ListGroup.Item>
                    <ListGroup.Item action href="/cloud solutions">Cloud Solutions</ListGroup.Item>
                </ListGroup>
            </Styles>
        );
    }
}