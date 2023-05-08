"use client";
import "./style.css";
import { getRandomQuotes } from "@/services";
import { useQuoteContext } from "@/context";
import Link from "next/link";

const Author = () => {
  const { fetchQuotes }: any = useQuoteContext();
  const author = getRandomQuotes().author;
  const genre = getRandomQuotes().genre;

  return (
    <div className="author">
      <Link href="/author-page">
        <button className="author-button" onClick={fetchQuotes}>
          <h3>{author} </h3>
          <div>{genre}</div>
        </button>
      </Link>
    </div>
  );
};

export default Author;
