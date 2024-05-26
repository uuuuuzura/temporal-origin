import { getMetadataTitle } from "@/utils/core";
import {
  getWritingContentBySlug,
  getAllWritingsMetadata,
  getWritingMetadataBySlug,
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
  try {
    const writingMetadata = getWritingMetadataBySlug(params.slug);
    return {
      title: getMetadataTitle(writingMetadata.title),
    };
  } catch (error) {
    return {
      title: getMetadataTitle("Writing not found"),
    };
  }
};

const Writing = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;

  try {
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
  } catch (error) {
    return (
      <main>
        <h2>Writing not found</h2>
        <p>
          Could not find the corresponding writing. Please check the URL or
          return to the writings index and try again.
        </p>
      </main>
    );
  }
};

export default Writing;
