import { getMetadataTitle } from "@/utils/core";
import { getAllWritingsMetadata } from "@/utils/writings";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: getMetadataTitle("Writings"),
};

const Writings = () => {
  const writingsMetadata = getAllWritingsMetadata();

  return (
    <main>
      <h2>Writings</h2>
      <ul>
        {writingsMetadata.map((writing, writingIndex) => (
          <li key={writingIndex}>
            <Link href={`/writings/${writing.slug}`}>{writing.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Writings;
