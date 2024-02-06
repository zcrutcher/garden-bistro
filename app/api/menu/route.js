import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const GET = async () => {
  const prisma = new PrismaClient();
  let menu = await prisma.menuItem.findMany();
  if (!menu) menu = [];
  return NextResponse.json({ results: menu });
};
