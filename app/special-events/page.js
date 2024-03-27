"use server";
import React from "react";
import Event from "./Event";
import { PrismaClient } from "@prisma/client";

const SpecialEvents = async () => {
  const prisma = new PrismaClient();
  const events = await prisma.specialEvent.findMany();
  console.log("events", events);
  return (
    <div className="container">
      <h2 className=" title is-size-2 has-text-centered block">
        Special Events
      </h2>
      {events.length > 0
        ? events.map((event) => {
            return (
              <Event
                key={event.id}
                id={event.id}
                title={event.title}
                summary={event.summary}
              />
            );
          })
        : null}
    </div>
  );
};

export default SpecialEvents;
