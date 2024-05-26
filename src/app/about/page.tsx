import { getMetadataTitle } from "@/utils/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: getMetadataTitle("About"),
};

const About = () => {
  return (
    <main>
      <h2>About</h2>
      <section>
        <h3>Website</h3>
        <p>
          Temporal Origin was created to give myself a space to enthuse about a
          hobby I was excited about. I'd been struggling to get along with
          social media for years and felt nostalgic for the fansites I used to
          visit when I was younger, so I figured I should put the skills I
          learned working in web development to good use.
        </p>
        <p>
          This site is coded using <strong>Next.js</strong> and{" "}
          <strong>Typescript</strong>, and then exported into static files.
          Probably a little cumbersome for this sort of thing but it's a good
          chance to experiment with the tooling and try out something new.
        </p>
        <p>
          The name Temporal Origin comes from the <strong>Lost Origin</strong>{" "}
          and <strong>Temporal Forces</strong> trading card game expansions. In
          effect, they were the expansions that got me back into the hobby as
          they inspired me to start my Giratina collection and ryoma uratsuka
          collection respectively.
        </p>
      </section>
      <section>
        <h3>Webmaster</h3>
        <p>
          Hello! My name is <strong>Donovan</strong>, although sometimes I go by{" "}
          <strong>Quails</strong>. I'm a web developer from the UK.
        </p>
        <p>
          I've been into Pokémon since Red and Blue first came out, and while
          that interest has waxed and waned over the years it's never truely
          left me. Despite that, I didn't start properly collecting Pokémon
          cards until <strong>March 2024</strong>.
        </p>
        <p>
          In addition to card collecting, I enjoy making things! I tend to
          dabble in various disciplines such as illustration, writing,
          cross-stitch, and collaging.
        </p>
      </section>
    </main>
  );
};

export default About;
