import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";

export const getWritingMetadata = (basePath: string) => {
  const folder = "src/" + basePath + "/";
  const files = readdirSync(folder);

  const writings = files.filter((file) => file.endsWith(".md"));

  const writingMetadata = writings.map((filename) => {
    const metadata = readFileSync(folder + filename, "utf-8");
    const matterResult = matter(metadata);
    return {
      title: matterResult.data.title,
      slug: filename.replace(".md", ""),
    };
  });

  return writingMetadata;
};

export const getWritingContent = (slug: string) => {
  const folder = "src/writings/";
  const file = folder + slug + ".md";
  const content = readFileSync(file, "utf-8");

  const matterResult = matter(content);
  return matterResult;
};
