import { NextResponse } from "next/server";

export const GET = async (request) => {
  return NextResponse.json({ results: menu });
};

const menu = [
  {
    id: 1,
    title: "Mediterranean Vegetable Risotto",
    description:
      "Arborio rice cooked with a blend of locally sourced, seasonal vegetables, and Mediterranean herbs, finished with a drizzle of extra virgin olive oil.",
    image: "mediterranean_vegtable_risotto.jpg",
  },
];
