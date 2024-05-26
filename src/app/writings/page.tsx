import { getAllWritingsMetadata } from "@/utils/writings";
import Link from "next/link";

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
