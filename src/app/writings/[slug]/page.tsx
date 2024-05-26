import {
  getWritingContentBySlug,
  getAllWritingsMetadata,
} from "@/utils/writings";
import Markdown from "markdown-to-jsx";

export const generateStaticParams = async () => {
  const writings = getAllWritingsMetadata();
  return writings.map((writing) => ({ slug: writing.slug }));
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const id = params?.slug ? " . " + params.slug : "";
  return {
    title: "Temporal Origin - " + id,
  };
};

const Writing = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const writingContent = getWritingContentBySlug(slug);

  return (
    <main>
      <Markdown
        options={{
          wrapper: "article",
          overrides: {
            h1: { component: "h2" },
            h2: { component: "h3" },
            h3: { component: "h4" },
          },
        }}
      >
        {writingContent}
      </Markdown>
    </main>
  );
};

export default Writing;
