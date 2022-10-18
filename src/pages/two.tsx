import * as React from "react";
import { Link } from "gatsby";

export default function TwoComponent() {
  return (
    <main>
      <h1>Two</h1>
      <Link to="/one">One</Link>
      <br />
      <Link to="/three">Three</Link>
    </main>
  );
}
