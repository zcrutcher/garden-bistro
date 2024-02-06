import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const GET = async (req) => {
  if (req.headers["content-type"] == "text/html") return null;
  const prisma = new PrismaClient();
  const menu = await prisma.menuItem.findMany();
  return NextResponse.json({ results: menu });
};
