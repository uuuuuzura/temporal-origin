import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";

const writingsBasePath = "src/writings/";

export const getAllWritingsMetadata = () => {
  const files = readdirSync(writingsBasePath);

  const writings = files.filter((file) => file.endsWith(".md"));

  const writingMetadata = writings.map((filename) => {
    const metadata = readFileSync(writingsBasePath + filename, "utf-8");
    const matterResult = matter(metadata);
    return {
      title: matterResult.data.title,
      slug: filename.replace(".md", ""),
    };
  });

  return writingMetadata;
};

export const getWritingContentBySlug = (slug: string) => {
  const file = writingsBasePath + slug + ".md";
  const content = readFileSync(file, "utf-8");

  const matterResult = matter(content);
  return matterResult.content;
};
