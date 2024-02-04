"use server";
import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <h1 className="title is-2 has-text-centered">About Us</h1>
      <div className="px-6">
        <p className="block">
          Welcome to{" "}
          <strong>
            <i>The Golden Bistro</i>
          </strong>
          , where we bring the flavors of Europe to your plate, one farm-fresh
          ingredient at a time. Our culinary journey began with a simple yet
          profound belief: exceptional food starts with exceptional ingredients.
          As a Farm-to-Table European Fusion restaurant, we are passionate about
          celebrating the bounty of our local farms and pairing it with the rich
          culinary traditions of Europe.
        </p>
        <h2 className="subtitle is-3">Our Philosophy</h2>
        <p className="block">
          At{" "}
          <strong>
            <i>The Golden Bistro</i>
          </strong>
          , we hold a deep respect for the land and the hands that cultivate it.
          That&aposs why we partner with local farmers, growers, and artisans
          who share our commitment to sustainable, organic, and ethical
          practices. From the crisp vegetables and farm-fresh eggs to the
          succulent meats and artisanal cheeses, our dedication to sourcing the
          finest local ingredients is unwavering.
        </p>
        <h2 className="subtitle is-3">Our Culinary Team</h2>
        <p className="block">
          Our talented culinary team, led by Chef Tony, is dedicated to crafting
          dishes that tell a story of the season. With years of experience and a
          passion for European cuisine, they bring innovative and mouthwatering
          creations to your table. Each dish is a labor of love, an artful blend
          of tradition and modernity.
        </p>
        <h2 className="subtitle is-3">The Dining Experience</h2>
        <p className="block">
          At{" "}
          <strong>
            <i>The Golden Bistro</i>
          </strong>
          , we believe that dining is an experience to be savored. Our warm and
          inviting ambiance is the perfect backdrop for a memorable meal with
          friends and loved ones. We take pride in delivering an exceptional
          dining experience that not only tantalizes your taste buds but also
          nourishes your soul.
        </p>
        <h2 className="subtitle is-3">Community Commitment</h2>
        <p className="block">
          We are proud to be a part of the local community, and we actively
          engage in initiatives that support sustainable agriculture, food
          education, and community outreach. Your support of our restaurant
          directly contributes to these endeavors, and we thank you for being a
          part of our shared commitment to a healthier, more connected world.
        </p>
        <h2 className="subtitle is-3">Join Us on This Culinary Journey</h2>
        <p className="block">
          We invite you to join us on a culinary journey through the heart of
          Europe, where farm-fresh ingredients meet European influences to
          create a symphony of flavors. Whether you&aposre celebrating a special
          occasion, enjoying a casual dinner, or just exploring new tastes,
          we&aposre here to make your dining experience unforgettable.
        </p>
        <p className="block">
          Thank you for choosing{" "}
          <strong>
            <i>The Golden Bistro</i>
          </strong>
          . We look forward to sharing the joy of exceptional food and the
          warmth of community with you.
        </p>
        <p className="block">
          <Link href="/reservation">Reserve</Link> your table today and let the
          culinary adventure begin!
        </p>
      </div>
    </>
  );
};

export default AboutUs;
