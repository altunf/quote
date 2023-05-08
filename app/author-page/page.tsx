"use client";
import Quote from "@/components/quote-card";
import { useQuoteContext } from "@/context";
import { getRandomQuotes } from "@/services";
import { raleway700 } from "@/styles/fonts";
import "./style.css";

const page = () => {
  const author = getRandomQuotes().author;
  const { authorDetail }: any = useQuoteContext();
  console.log(authorDetail);

  return (
    <div>
      <div className={`${raleway700.className} author-style`}>{author}</div>

      {authorDetail.map((el: any, index: number) => (
        <div key={index}>
          <Quote props={el.quoteText} />
        </div>
      ))}
    </div>
  );
};

export default page;
