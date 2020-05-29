import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form      from 'react-bootstrap/Form';
import Button    from 'react-bootstrap/Button';

class Joke extends Component {
    state = {
       text: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();
    
        if (this.state.text === "") {
            toast.error("METS TA BLAGUE !");
            return;
        }

        Meteor.loginWithText(this.state.text, (error) => {
            if (error) {
                toast.error(error.reason);
            } else {
                this.props.history.push('/room');
            }
        });
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return(
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Control
                        type="text"
                        name="text"
                        onChange={this.handleChange}
                        value={this.state.text}
                        placeholder="entrez votre blague"
                    />
                    <Button variant="success" type="submit">Validez</Button>
    
                    <Button variant="secondary" as={Link} to="/blaguealeatoire">
                          Obtenir une nouvelle blague aléatoire
                      </Button>
                </Form>
            </Container>
        );
    };
};

export default Joke;