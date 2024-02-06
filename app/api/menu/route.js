import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const GET = async () => {
  const prisma = new PrismaClient();
  const menu = await prisma.menuItem.findMany();
  if (!menu) return [];
  return NextResponse.json({ results: menu });
};
