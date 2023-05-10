"use client";
import { useQuoteContext } from "@/context";
import getRandomQuotes from "@/services";
import Link from "next/link";
import "./style.css";

const Author = () => {
  const { fetchQuotes }: any = useQuoteContext();
  const author = getRandomQuotes().author;
  const genre = getRandomQuotes().genre;

  const queries = {
    pathname: "/author",
    query: {
      author: author,
    },
  };

  return (
    <div className="author">
      <Link href={queries}>
        <button
          className="author-button"
          onClick={() => {
            fetchQuotes();
          }}
        >
          <h3>{author} </h3>
          <div>{genre}</div>
        </button>
      </Link>
    </div>
  );
};

export default Author;
