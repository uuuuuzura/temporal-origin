import { getWritingMetadata } from "@/utils/writings";
import Link from "next/link";

const Writings = () => {
  const writingMetadata = getWritingMetadata("writings");

  return (
    <main>
      <h2>Writings</h2>
      <ul>
        {writingMetadata.map((writing, writingIndex) => (
          <li key={writingIndex}>
            <Link href={`/writings/${writing.slug}`}>{writing.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Writings;
