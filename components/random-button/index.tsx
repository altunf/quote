"use client";

import { useQuoteContext } from "@/context";
import { BsArrowRepeat } from "react-icons/bs";

import "./style.css";
import { raleway } from "@/styles/fonts";

const Random = () => {
  const { fetchRandom }: any = useQuoteContext();
  return (
    <div className="button-div">
      <button
        onClick={fetchRandom}
        className={`${raleway.className} random-button`}
      >
        <div style={{ marginRight: "0.5em" }}>random</div>
        <BsArrowRepeat />
      </button>
    </div>
  );
};

export default Random;
