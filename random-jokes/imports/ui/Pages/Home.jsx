import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button    from 'react-bootstrap/Button';

const Home = () => {
    return (
        <Container>
            <Button variant="info" as={Link} to="/signin" block>
                Se connecter
            </Button>
            <Button variant="warning" as={Link} to="/signup" block>
                Créer un compte
            </Button>
    
        </Container>
    );
};

export default Home;