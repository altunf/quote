"use client";
import { getRandomQuotes } from "@/services";
import Quote from "../quote-card";

const RandomQuote = () => {
  const quote = getRandomQuotes().quote;

  return (
    <>
      <Quote props={quote} />
    </>
  );
};

export default RandomQuote;
