"use client";
import { useQuoteContext } from "@/context";
import { raleway } from "@/styles/fonts";
import "./style.css";

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
