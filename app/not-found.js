"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="has-text-centered">
      <h1 className="is-size-3">Not found – 404!</h1>
      <div>
        <Link href="/">Go back to Home</Link>
      </div>
    </div>
  );
}
