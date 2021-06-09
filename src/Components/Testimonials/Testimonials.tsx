import React from "react";
import "./Testimonials.scss";
import TestimonialCard from "./TestimonailCard";
import pictureTestimonial1 from "../../Images/TestimonialPictures/Oval.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lara Madrigal",
      position: "client",
      picture: pictureTestimonial1,
      testimonial:
        "“Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”",
    },
    {
      name: "Lara Madrigal",
      position: "client",
      picture: pictureTestimonial1,
      testimonial:
        "“Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”",
    },
    {
      name: "Lara Madrigal",
      position: "client",
      picture: pictureTestimonial1,
      testimonial:
        "“Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”",
    },
  ];
  return (
    <div className="container testimonials boxed-content">
      <div className="row">
        {testimonials.map((testimonials) => (
          <TestimonialCard
            name={testimonials.name}
            position={testimonials.position}
            picture={testimonials.picture}
            testimonial={testimonials.testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
