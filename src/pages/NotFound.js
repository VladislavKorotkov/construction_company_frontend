import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Container>
        <div className="text-center">
          <h1 className="display-4">404</h1>
          <p className="lead">Страница не найдена</p>
          <p>К сожалению, страница, которую вы ищете, не существует.</p>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;