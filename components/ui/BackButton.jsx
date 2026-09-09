import React from "react";
import back from "@/public/images/back.svg";
import Image from "next/image";
const BackButton = ({ className = "" }) => {
  return (
    <button className={className} aria-label="Go back">
      <Image src={back} alt="" />
    </button>
  );
};

export default BackButton;
