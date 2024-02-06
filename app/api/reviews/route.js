import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const GET = async () => {
  const prisma = new PrismaClient();
  const reviews = await prisma.review.findMany();
  return NextResponse.json({ results: reviews });
};
