import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const POST = async (req) => {
  const prisma = new PrismaClient();
  const request = await req.json();
  const contact = await prisma.contact.create({
    data: {
      email: request.email,
      phone: request.phone,
      message: request.message,
    },
  });
  return NextResponse.json({ results: contact }, { status: 201 });
};
