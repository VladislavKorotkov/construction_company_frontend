import Container from 'react-bootstrap/Container';


export default function Footer() {
    return (
      <footer className="py-3 bg-dark text-white text-center">
        <Container>
          <div className="footer-content">
            <p>&copy; 2024 Стройся-ка</p>
          </div>
        </Container>
      </footer>
    );
  }