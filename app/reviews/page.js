"use server";

import React from "react";
import Review from "./Review";
//import nextConfig from "@/next.config.mjs";
import { PrismaClient } from "@prisma/client";

const Reviews = async () => {
  const prisma = new PrismaClient();
  const reviews = await prisma.review.findMany();

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
