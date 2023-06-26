"use client";

import { MainContainer } from "@/components/MainContainer";
import Image from "next/image";
import { useState } from "react";
import NotFound from "./public/not_found.png";

export default function NotFoundPage({
  params,
}: {
  params: { crumbId: string };
}) {
  const [typingPerc, setTypingPerc] = useState(0);

  let barContent = <>Enter Crumb:</>;
  let barStyle = {};
  function handleInput(e: any) {
    let len = e!.target!.value!.length ?? 0;
    let newPerc = (len * 100) / 6 > 100 ? 100 : (len * 100) / 6;
    setTypingPerc(newPerc);
  }

  if (typingPerc > 0 && typingPerc < 100) {
    barStyle = {
      background: `linear-gradient(90deg, rgba(131, 121, 31, 0.504) ${typingPerc}%, transparent 0%)`,
      margin: "0px 5px",
    };
  } else if (typingPerc === 100) {
    barContent = (
      <>
        <button className="p-1 hover-grow">Submit</button>
      </>
    );
  }

  return (
    <MainContainer>
      <div className="max-w-2xl -mt-5 text-center text-light-brown text-lg font-normal">
        <Image
          className="m-auto mb-6 hover-grow"
          src={NotFound}
          alt="Logo"
          width={260}
        />
        <h1 className="text-dark-brown font-bold text-4xl">
          Did you find a crumb?
        </h1>

        <h3 className="text-middle-brown mt-8">
          <span className="font-semibold" style={barStyle}>
            {" "}
            {barContent}{" "}
          </span>
          <input
            type="text"
            name="crumbId"
            className="pl-2 pr-2 mb-2 rounded-lg bg-bg-brown border-middle-brown border-solid border-2 text-middle-brown outline-none focus:border-orange focus:shadow-orange focus:shadow-md"
            onChange={handleInput}
          />
        </h3>

        <h3 className="text-small-brown text-xs">
          A crumb is the unique code you find at the end of the url
          <br />
          e.g. dontopen.me/<span style={{ color: "orange" }}>XXXX</span>
        </h3>
      </div>
    </MainContainer>
  );
}
