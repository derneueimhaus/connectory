import React, { useState, useEffect } from "react";
import SaveSettings from "./SaveSettings";
import TestimonialsSettingsUnit from "./TestimonialsSettingsUnit";

export default function TestimonialsSettingsList({ testimonialsData }) {
  const [selectedTestimonials, setSelectedTestimonials] = useState([]);

  useEffect(() => {
    testimonialsData.forEach((testimonial) => {
      if (testimonial.show === true) {
        setSelectedTestimonials((prevState) => [
          ...prevState,
          testimonial.testimonialId,
        ]);
      }
    });
  }, [testimonialsData]);

  const handleCheckboxChange = (boolean, id) => {
    if (boolean === true) {
      setSelectedTestimonials((prevState) => [...prevState, id]);
    } else {
      const newArray = [...selectedTestimonials];
      const elementIndex = newArray.find((element) => element === id);
      newArray.splice(newArray.indexOf(elementIndex), 1);
      console.log(newArray);
      setSelectedTestimonials(newArray);
    }
  };

  return (
    <div>
      <SaveSettings objKey="testimonials" />
      {testimonialsData
        ? testimonialsData.map((testimonial, i) => (
            <TestimonialsSettingsUnit
              key={testimonial.testimonialId}
              index={i}
              data={testimonial}
              selectedTestimonials={selectedTestimonials}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))
        : "Loading..."}
    </div>
  );
}
