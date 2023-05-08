"use client";

import "./style.css";
import { raleway } from "@/styles/fonts";

const Quote = ({ props }: any) => {
  return (
    <div className="quote-card">
      <div className={`${raleway.className} quote`}>
        <p className="p">{props}</p>
      </div>
    </div>
  );
};

export default Quote;
