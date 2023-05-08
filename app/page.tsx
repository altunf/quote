import Author from "@/components/author-button";
import Random from "@/components/random-button";
import RandomQuote from "@/components/random-quotes";

export default function Home() {
  return (
    <>
      <Random />
      <RandomQuote />
      <Author />
    </>
  );
}
