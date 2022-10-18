import * as React from "react";
import { Link } from "gatsby";

export default function ThreeComponent() {
  return (
    <main>
      <h1>Three</h1>
      <Link to="/one">One</Link>
      <br/>
      <Link to="/two">Two</Link>
    </main>
  );
}
