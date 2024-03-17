import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import back from "../img/back.jpg"
import advantages from '../data/advantages';
import Testimonial from '../components/Testimonial/Testimonial';
import Advantage from '../components/Advantage';

export default function Home () {
    const testimonials = [
        {
          name: 'John Doe',
          comment: 'Great service! I highly recommend it.',
        },
        {
          name: 'Jane Smith',
          comment: 'Excellent product quality and fast delivery.',
        },
      ];
    return (
        <>
        <section className="position-relative">
            <div className="one-third-height">
            <img src={back} alt="Construction" className="w-100 h-100" />
            </div>
        </section>

      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center mb-4">Наши преимущества</h2>
            </Col>
          </Row>
          <div className="row">
          {advantages.map((advantage, index) => (
            <div className="col-md-4" key={index}>
              <Advantage {...advantage} />
            </div>
          ))}
        </div>
        </Container>
      </section>


      <section className="py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center mb-4">Отзывы наших клиентов</h2>
            </Col>
          </Row>
          {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          name={testimonial.name}
          comment={testimonial.comment}
        />
      ))}
        </Container>
      </section>

    
    </>
    )
}