import * as React from "react";
import * as Sentry from "@sentry/gatsby";
import { Link } from "gatsby";

export default function OneComponent({ serverData }: any) {
  console.log({serverData})
  return (
    <main>
      <h1>One</h1>
      <Link to="/two">Two</Link>
      <br />
      <Link to="/three">Three</Link>
    </main>
  );
}

export async function getServerData() {
  Sentry.captureException(new Error("Unable to fetch any data whatsoever"));

  return {
    status: 200, // The HTTP status code that should be returned
    props: {
      hello: "world",
    }, // Will be passed to the page component as "serverData" prop
    headers: {}, // HTTP response headers for this page
  };
}
