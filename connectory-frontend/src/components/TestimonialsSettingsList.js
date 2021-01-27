import React from "react";
import TestimonialsSettingsUnit from "./TestimonialsSettingsUnit";

import testPhoto from "../assets/blank.png";

const testimonialsData = {
  userId: 1,
  testimonials: [
    {
      show: true,
      testimonialId: 111,
      authorImage: testPhoto,
      authorMember: true,
      authorPro: true,
      authorUserId: 7,
      authorName: "John Smith",
      authorTitle: "CEO",
      authorCompany: "Pro-Evo Technologies",
      text:
        "Hit the thumbs up in agreement of these changes or comment any questions or objections to this post asap. I'd like to update Joan later this afternoon on whether we're pursue the pre-recorded or live option.",
    },
    {
      show: true,
      testimonialId: 222,
      authorImage: testPhoto,
      authorMember: false,
      authorPro: false,
      authorUserId: null,
      authorName: "Chris Evans",
      authorTitle: "Marketeer",
      authorCompany: "IBM",
      text:
        "Hit the thumbs up in agreement of these changes or comment any questions or objections to this post asap. I'd like to update Joan later this afternoon on whether we're pursue the pre-recorded or live option.",
    },
    {
      show: false,
      testimonialId: 333,
      authorImage: testPhoto,
      authorMember: false,
      authorPro: false,
      authorUserId: null,
      authorName: "Chris Evans",
      authorTitle: "Marketeer",
      authorCompany: "IBM",
      text:
        "Hit the thumbs up in agreement of these changes or comment any questions or objections to this post asap. I'd like to update Joan later this afternoon on whether we're pursue the pre-recorded or live option.",
    },
  ],
};

export default function TestimonialsSettingsList() {
  return (
    <div>
      {testimonialsData.testimonials.map((testimonial, i) => (
        <TestimonialsSettingsUnit
          key={testimonial.testimonialId}
          index={i + 1}
          data={testimonial}
        />
      ))}
    </div>
  );
}
