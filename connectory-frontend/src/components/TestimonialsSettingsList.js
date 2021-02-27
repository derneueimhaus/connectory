import React, { useState, useEffect } from "react";
import SaveSettings from "./SaveSettings";
import TestimonialsSettingsUnit from "./TestimonialsSettingsUnit";

export default function TestimonialsSettingsList({ testimonialsData }) {
  const [selectedTestimonials, setSelectedTestimonials] = useState([]);
  const [testimonials, setTestimonials] = useState(testimonialsData);

  useEffect(() => {
    const selectedTestimonials = testimonials
      .filter(({ show }) => show)
      .map(({ testimonialId }) => testimonialId);
    setSelectedTestimonials(selectedTestimonials);
  }, [testimonials]);

  const handleCheckboxChange = (show, testimonialId) => {
    const updatedTestimonials = testimonials.map((testimonial) => {
      if (testimonial.testimonialId === testimonialId) {
        return {
          ...testimonial,
          show,
        };
      }
      return testimonial;
    });
    setTestimonials(updatedTestimonials);
  };

  return (
    <div>
      <SaveSettings objKey="testimonials" />
      <p>You can add a maximum of two testimonials to your profile page.</p>
      {testimonialsData
        ? testimonials.map((testimonial, i) => {
            const isSelected = selectedTestimonials.includes(
              testimonial.testimonialId
            );
            const isDisabled = !isSelected && selectedTestimonials.length === 2;
            return (
              <TestimonialsSettingsUnit
                key={testimonial.testimonialId}
                index={i}
                data={testimonial}
                handleCheckboxChange={handleCheckboxChange}
                isSelected={isSelected}
                isDisabled={isDisabled}
              />
            );
          })
        : "Loading..."}
    </div>
  );
}
