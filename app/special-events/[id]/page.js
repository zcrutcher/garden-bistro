"use server";
import React from "react";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

const Detail = async ({ params }) => {
  const prisma = new PrismaClient();
  const data = await prisma.specialEvent.findUnique({
    where: {
      id: +params.id,
    },
    include: {
      additional: true,
    },
  });

  return (
    <div className="container">
      <>
        <nav className="breadcrumb block" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link href="/special-events">Special Events</Link>
            </li>
            <li className="is-active">
              <Link href={`/special-events/${params.id}`}>{data.title}</Link>
            </li>
          </ul>
        </nav>
        <div className="content box">
          <h2 className="is-size-2 has-text-centered block">{data.title}</h2>
          <p>{data.summary}</p>

          {data.additional.map((article) => {
            return (
              <>
                <h3>{article.subTitle}</h3>
                <p>{article.summary}</p>
              </>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default Detail;
