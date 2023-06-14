import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate"
export const ChatBody = ({ chat }) => {
  const AiStyle = "bg-white bg-opacity-40 backdrop-lg dropshadow-md mr-auto";

  const parent = useRef(null);
  const bottomRef = useRef(null);

  //for auto animation
  useEffect(()=> {
    parent.current && autoAnimate(parent.current);
  },[parent])

  //for scrolling for new chat
  useEffect(()=>{
    bottomRef.current?.scrollIntoView({behavior:"smooth"})
  },[chat])
  
  return (
    <div className="flex flex-col gap-4" ref={parent}>
      {chat.map((message, i) => {
        //client message
        return (
          <div
            key={i}
            className={` border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${
              message.sender === "ai" && AiStyle
            }`}
          >
            <pre className="whitespace-pre-wrap">
              <span> {message.message}</span>
            </pre>
          </div>
        );
      })}
    <div ref={bottomRef}></div>
    </div>
  );
};
