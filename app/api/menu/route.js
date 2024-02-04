import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const menu = await prisma.menuItem.findMany();
export const GET = async (request) => {
  return NextResponse.json({ results: menu });
};
