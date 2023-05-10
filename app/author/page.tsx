"use client";
import { useEffect } from "react";
import Quote from "@/components/quote-card";
import { useQuoteContext } from "@/context";
import { useSearchParams } from "next/navigation";

import "./style.css";
import { raleway700 } from "@/styles/fonts";

const AuthorDetail = () => {
  const { fetchQuotes, authorDetail, setAuthor }: any = useQuoteContext();
  const searchParams = useSearchParams();
  const name = searchParams.get("author");

  useEffect(() => {
    setAuthor(name);
    fetchQuotes(name);
  }, [name]);

  return (
    <div>
      <div className={`${raleway700.className} author-style`}>{name}</div>

      {authorDetail.map((el: any, index: number) => (
        <div key={index}>
          <Quote props={el.quoteText} />
        </div>
      ))}
    </div>
  );
};

export default AuthorDetail;
