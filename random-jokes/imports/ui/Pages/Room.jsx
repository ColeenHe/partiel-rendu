import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button    from 'react-bootstrap/Button';

const Room= () => {
    return (
        <Container>
            <Button variant="success" as={Link} to="/joke">
                 Déposez une blague
            </Button>
             <Button variant="secondary" as={Link} to="/blaguealeatoire">
                 Obtenir une nouvelle blague aléatoire
            </Button>
        </Container>
    );
};

export default Room;