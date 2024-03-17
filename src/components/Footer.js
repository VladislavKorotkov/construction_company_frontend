import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
export default function Footer(){
    return(
        <footer className="py-3 bg-dark text-white text-center">
            <Container>
            <p>&copy; 2024 Стройся-ка</p>
            </Container>
      </footer>
    )
}