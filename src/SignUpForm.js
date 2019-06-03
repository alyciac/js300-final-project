import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import firebase from 'firebase';


//const db = firebase.firestore();

class NewUserEntry extends React.Component{

    //componentWillMount(){
       // this.unsubscribeEntry();
    //}

   // state = {
       // entries: [],
        //entry: ''
   // }

   // componentDidMount(){
        //listens for database changes
       // this.unsubscribeEntry = db
           // .collection('users')
            // .onSnapshot(snapshot => {
              //  this.setState({
                   // entries: snapshot.docs
               // });
           // });
    //}

    //componentWillMount(){
        //this.unsubscribeEntry();
    //}

    render(){
        return (
            <Container>
                <h1>Turnip Swap</h1>
                <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
                    amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale.
                    Celery potato scallion desert raisin horseradish spinach carrot soko. </p>
                <h2>Sign Up</h2>
            <Form>
                    <Form.Group controlId="form.SignUp" onSubmit="this.addUser">
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
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" />
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

export default NewUserEntry;

