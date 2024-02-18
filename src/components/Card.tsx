import { Clock, MessageSquareText } from "lucide-react";
import { Button } from "./ui/button";
import React, { useEffect, useState } from "react";
import moment from "moment";
type prop = {
  tag?: string;
  image?: string;
  title?: string;
  time?: string;
  comments?: string;
};
function Card( {      
  tag,
  image,
  title,
  time = "Not Avaialable",
  comments = "0 Comments",
}: prop) {

  const head = JSON.parse(localStorage.getItem("head") || '""');
  const description = JSON.parse(localStorage.getItem("description") || '""');
  const date = JSON.parse(localStorage.getItem("date") || '""');
  const postIndex = parseInt(localStorage.getItem("postIndex") || "0", 10);
  
  // Log the retrieved and parsed items
  console.log({ head, description, date, postIndex });
     console.log(head);
     console.log(description);
     console.log(date);
     console.log(postIndex);
     console.log("Testing");


  // const postStr = localStorage.getItem(key);
  // if (postStr) {
  //   const post = JSON.parse(postStr);
  //   const { title, content, date } = post;
  
  //   // If you stored the date in a standard format, you can use moment.js to convert it to a relative format
  //   const relativeDate = moment(date).fromNow();
  
  //   console.log({ title, content, date, relativeDate, key });
  // }


    //   const head = localStorage.getItem("title");
    //   const content = localStorage.getItem("content");
    //   const date = localStorage.getItem("relativeDate");
    //   const key = localStorage.getItem("key");

    //   console.log(head);
    //   console.log(content);
    //   console.log(date);
    //   console.log(key);
    // console.log("Title", data.title);
    // console.log("Content", data.content);
    // console.log("Date", data.relativeDate);
    // console.log("Key", key);

    return (

      <div>
        <div className="rounded overflow-hidden shadow-lg flex flex-col h-[500px]">
          <div className="relative">
            <img
              className="w-full h-[250px] md:h-[200px]"
              src={image}
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
            <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              {tag}
            </div>
          </div>

          <h3 className="font-semibold text-lg m-4 shrink-0">head</h3>
          <p
            className="text-gray-500 text-sm overflow-hidden grow mx-5"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            dangerouslySetInnerHTML={{ __html:  }}
          />
          <Button
            size={"sm"}
            variant={"destructive"}
            className=" bg-zinc-500 hover:bg-zinc-400 m-5 shrink-0"
          >
            Read More...
          </Button>
          <div className="px-6 py-4 flex items-center justify-between bg-gray-200 shrink-0">
            <span className="text-xs text-gray-900 flex">
              <Clock size={16} />
              <span className="ml-1"> {date} </span>
            </span>
            <span className="text-xs text-gray-900 flex">
              <MessageSquareText size={16} />
              <span className="ml-1">{comments}</span>
            </span>
          </div>
        </div>
      </div>
    );
  };


export default Card;
