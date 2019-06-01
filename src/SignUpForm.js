import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

class SignUp extends React.Component{
    render(){
        return (
            <Container>
            <Form>
                    <Form.Group controlId="form.SignUp">
                        <Form.Label>Name</Form.Label>
                        <Form.Row>
                            <Col>
                            <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                            <Form.Control placeholder="Last name" />
                            </Col>
                        </Form.Row>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Veggies you wish to swap:</Form.Label>
                            <Form.Control as="select" multiple>
                            <option>Broccoli</option>
                            <option>Tomatoes</option>
                            <option>Zucchini/Summer Squash</option>
                            <option>Beans</option>
                            <option>Pumpkins/ Winter Squash</option>
                            </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Veggies you wish to receive:</Form.Label>
                            <Form.Control as="select" multiple>
                            <option>Broccoli</option>
                            <option>Tomatoes</option>
                            <option>Zucchini/Summer Squash</option>
                            <option>Beans</option>
                            <option>Pumpkins/ Winter Squash</option>
                            <option>I'll take anything!</option>
                            </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default SignUp;

