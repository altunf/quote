"use client";
import { useEffect } from "react";
import { useQuoteContext } from "@/context";

export default function getRandomQuotes() {
  const { fetchRandom, genre, author, quote }: any = useQuoteContext();

  useEffect(() => {
    fetchRandom();
  }, []);

  const random = { quote: quote, author: author, genre: genre };

  return random;
}
