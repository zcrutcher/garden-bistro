"use server";

import React from "react";
import Review from "./Review";
import nextConfig from "@/next.config.mjs";

const Reviews = async () => {
  const reviews = await fetch(
    `${nextConfig.env.NEXT_PUBLIC_APP_URL}/api/reviews`
  )
    .then((res) => res.json())
    .then((data) => data.results);
  return (
    <div className="container">
      <h2 className="title is-size-2 has-text-centered block">Reviews</h2>
      {reviews?.length > 0
        ? reviews.map((review) => {
            return (
              <Review
                key={review.id}
                firstName={review.firstName}
                stars={review.stars}
                message={review.message}
                img={review.image}
              />
            );
          })
        : null}
    </div>
  );
};

export default Reviews;
