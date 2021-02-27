import React, { useState, useEffect } from "react";
import SaveSettings from "./SaveSettings";
import TestimonialsSettingsUnit from "./TestimonialsSettingsUnit";

export default function TestimonialsSettingsList({ testimonialsData }) {
  const [selectedTestimonials, setSelectedTestimonials] = useState([]);
  const [showCount, setShowCount] = useState(0);

  useEffect(() => {
    testimonialsData.forEach((testimonial) => {
      if (testimonial.show === true) {
        setSelectedTestimonials((prevState) => [
          ...prevState,
          testimonial.testimonialId,
        ]);
        setShowCount((s) => s + 1);
      }
    });
  }, [testimonialsData]);

  const handleCheckboxChange = (e, boolean, id) => {
    // if (showCount === 2 && boolean === true) {
    //   alert(
    //     'You can select a maximum of two testimonials to display. If you want to change testimonials, please deselect "Show on profile" for another testimonial.'
    //   );
    //   e.stopPropagation();
    //   return;
    // }
    if (boolean === true) {
      setSelectedTestimonials((prevState) => [...prevState, id]);
      setShowCount((s) => s + 1);
    } else {
      const newArray = [...selectedTestimonials];
      const elementIndex = newArray.find((element) => element === id);
      newArray.splice(newArray.indexOf(elementIndex), 1);
      console.log(newArray);
      setSelectedTestimonials(newArray);
      setShowCount((s) => s - 1);
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
              showCount={showCount}
            />
          ))
        : "Loading..."}
    </div>
  );
}
