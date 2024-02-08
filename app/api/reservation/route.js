import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const prisma = new PrismaClient();
  const data = await request.json();
  const response = await prisma.reservation.create({
    data: {
      party: data.party,
      date: data.date,
      time: data.time,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
      specialRequests: data.specialRequests,
    },
  });

  return NextResponse.json({ results: response }, { status: 201 });
};
