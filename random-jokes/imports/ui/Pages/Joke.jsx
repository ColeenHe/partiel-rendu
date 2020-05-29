import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form      from 'react-bootstrap/Form';
import Button    from 'react-bootstrap/Button';

class Joke extends Component {
    state = {
        email: "",
        blague: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
        if (this.state.email === "") {
            toast.error("Votre email n'est pas renseigné");
            return;
        }

        if (this.state.password === "") {
            toast.error("Votre blague n'est pas renseigné");
            return;
        }

        Meteor.loginWithPassword(this.state.email, this.state.password, (error) => {
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
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        placeholder="entrez votre email"
                    />
                    <Form.Control
                        type="text"
                        name="text"
                        onChange={this.handleChange}
                        value={this.state.password}
                        placeholder="entrez votre blague"
                    />
                    <Button variant="primary" type="submit">Validez</Button>
    
                    <Button variant="secondary" as={Link} to="/blaguealeatoire">
                          Obtenir une nouvelle blague aléatoire
                      </Button>
                </Form>
            </Container>
        );
    };
};

export default Joke;