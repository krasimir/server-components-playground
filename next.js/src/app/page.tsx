import Link from "next/link";

import { EXAMPLES } from "../app/constants";

export default async function Home() {
  return (
    <>
      <ul style={{ listStyleType: "disc", paddingLeft: "1rem" }}>
        {EXAMPLES.map((example) => (
          <li key={example.url}>
            <Link href={`${example.url}`}>{example.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
