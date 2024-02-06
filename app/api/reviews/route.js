import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const GET = async () => {
  if (req.headers["content-type"] == "text/html") return null;
  const prisma = new PrismaClient();
  const reviews = await prisma.review.findMany();
  console.log("did I get hit, reviews", reviews);
  return NextResponse.json({ results: reviews });
};
