"use client";
import Quote from "@/components/quote-card";
import { useQuoteContext } from "@/context";

import { raleway700 } from "@/styles/fonts";
import "./style.css";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("author");

  const { fetchQuotes, authorDetail, setAuthor }: any = useQuoteContext();

  useEffect(() => {
    setAuthor(name);
    fetchQuotes(name);
  }, [name]);

  console.log(authorDetail);

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

export default page;
