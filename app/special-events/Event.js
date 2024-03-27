import React from "react";
import Link from "next/link";

const Event = ({ id, title, summary }) => {
  return (
    <div className="box content">
      <h2>{title}</h2>
      <p>{summary}</p>
      <Link href={`/special-events/${id}`}>
        <button className="button is-info is-light">See More</button>
      </Link>
    </div>
  );
};

export default Event;
