import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './setupFirebase';
import firebase from 'firebase';

const db = firebase.firestore();

    class NewUserEntry extends React.Component{
        state = {
            Email: '',
            Name: {
                First: '',
                Last: ' '
            },
            Has: [],
            Wants: []
        }

    // Sets the input field onChange
    onEmailChange = (event) => {
        const Email = event.target.value;
        this.setState({Email});
    }
    onFirstChange = (event) => {
        const First = event.target.value;
        this.setState({Name:{First}});
    }

    onLastChange = (event) => {
        const Name = this.state.Name;
        Name.Last = event.target.value;
        this.setState({Name});
    }

    onHasChange = (event) => {
        this.setState({Has: [...event.target.selectedOptions].map(o => o.value)});
    }

    onWantsChange = (event) => {
        this.setState({Wants: [...event.target.selectedOptions].map(o => o.value)});
    }

    onIdChange = (event) => {
        const Id = event.target.value;
        this.setState({Id});
    }

    addUser = (event) => {
        db.collection('users').doc(this.state.Id).set(this.state);
        event.preventDefault();
    }

    render(){
        return (
            <Container>
                <h1>Turnip Swap</h1>
                <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
                    amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale.
                    Celery potato scallion desert raisin horseradish spinach carrot soko. </p>
                <h2>Sign Up</h2>
            <Form onSubmit={this.addUser} >
                    <Form.Group controlId="form.SignUp">
                        <Form.Label>Name</Form.Label>
                        <Form.Row>
                            <Col>
                            <Form.Control onChange={this.onFirstChange} name="First" placeholder="First name" />
                            </Col>
                            <Col>
                            <Form.Control onChange={this.onLastChange}name="Last" placeholder="Last name" />
                            </Col>
                        </Form.Row>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="Email" onChange={this.onEmailChange} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={this.onIdChange} name="userid" type="text" placeholder="Username" id="username" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Veggies you wish to swap:</Form.Label>
                            <Form.Control onChange={this.onHasChange} as="select" multiple >
                            <option>Broccoli</option>
                            <option>Tomatoes</option>
                            <option>Zucchini/Summer Squash</option>
                            <option>Beans</option>
                            <option>Pumpkins/ Winter Squash</option>
                            </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Veggies you wish to receive:</Form.Label>
                            <Form.Control as="select" multiple onChange={this.onWantsChange}>
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

export default NewUserEntry;

