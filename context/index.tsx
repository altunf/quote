"use client";
import { createContext, useContext, useState } from "react";

const QuoteContext = createContext({});

export const QuoteContextProvider = ({ children }: any) => {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState([]);
  const [genre, setGenre] = useState([]);
  const [authorDetail, setAuthorDetail] = useState([]);
  const [authorName, setAuthorName] = useState("");

  const fetchQuotes = async function (name?: string) {
    if (name) {
      const res = await fetch(
        `https://quote-garden.onrender.com/api/v3/quotes?author=${name}`
      );
      const quotes = await res.json();
      setAuthorDetail(quotes.data);
      setAuthorName(quotes.data[0].quoteAuthor);
    } else {
      const res = await fetch(
        `https://quote-garden.onrender.com/api/v3/quotes?author=${author}`
      );
      const quotes = await res.json();
      setAuthorDetail(quotes.data);
      setAuthorName(quotes.data[0].quoteAuthor);
    }
  };

  const fetchRandom = async function () {
    const res = await fetch(
      `https://quote-garden.onrender.com/api/v3/quotes/random`
    );
    const randomQuotes = await res.json();
    setQuote(randomQuotes.data[0].quoteText);
    setAuthor(randomQuotes.data[0].quoteAuthor);
    setGenre(randomQuotes.data[0].quoteGenre);
  };

  return (
    <QuoteContext.Provider
      value={{
        authorName,
        fetchQuotes,
        fetchRandom,
        authorDetail,
        genre,
        setGenre,
        author,
        setAuthor,
        quote,
        setQuote,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuoteContext = () => useContext(QuoteContext);
