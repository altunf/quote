"use client";

import { raleway } from "@/styles/fonts";
import "./style.css";
import { useQuoteContext } from "@/context";

const Random = () => {
  const { fetchRandom }: any = useQuoteContext();
  return (
    <>
      <button
        onClick={fetchRandom}
        className={`${raleway.className} random-button`}
      >
        random
      </button>
    </>
  );
};

export default Random;
