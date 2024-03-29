import React from 'react';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Container, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RoledMainMenu from '../RoledMainMenu/RoledMainMenu';

export default class ContactPage extends React.Component {
    render() {
        return (
            <Container>
                <RoledMainMenu role="user" />

                <Card>
                    <Card.Body>
                        <Card.Title>
                            <FontAwesomeIcon icon={ faPhone } /> Contact details
                        </Card.Title>  
                        <Card.Text>
                            Contact details will be show here....
                        </Card.Text> 
                    </Card.Body>
                </Card>

            </Container> 
        );
    }

}