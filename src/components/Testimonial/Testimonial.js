
import './Testimonial.css';

const Testimonial = ({ name, comment }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-card">
        <h3 className="testimonial-name">{name}</h3>
        <p className="testimonial-comment">{comment}</p>
      </div>
    </div>
  );
};

export default Testimonial;