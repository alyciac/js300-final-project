import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './setupFirebase';
import firebase from 'firebase';

const db = firebase.firestore();
db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});

class UserComponent extends React.Component {
    state = {
        users: [],
        password: ''
    }
    componentDidMount() {
        this.unsubscribe = db
         .collection('users')
            .onSnapshot(snapshot => {
               this.setState({
                    users: snapshot.docs
               });
           });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

   render(){
    const users = this.state.users.map(user => {
        return (
            <Container>
            <Card>
                <Card.Header>Seattle, WA</Card.Header>
                <Card.Body>
                    <Card.Title>{user.id}</Card.Title>
                    <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
                    <ListGroup as="ul">
                        <ListGroupItem as="li" action variant="primary">Produce to Swap:</ListGroupItem>
                        <ListGroupItem as="li" action variant="primary" >Looking for: </ListGroupItem>
                        <ListGroupItem as="li">Item One </ListGroupItem>
                        <ListGroupItem as="li">Item Two</ListGroupItem>
                    </ListGroup>
            </Card.Body>
            <Card.Footer><Card.Link href="mailto:{user.Email}">Contact Gardner</Card.Link></Card.Footer>
            </Card>
        </Container>
        );
     });
        return (
            <Container>
                {users}
            </Container>
        );
   }
}

export default UserComponent;