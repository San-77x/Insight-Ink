import { TrendingUp } from "lucide-react";
import Card from "./Card";
import { useState, useEffect } from "react";

function FeaturedCard() {
  const head = JSON.parse(localStorage.getItem("head") || '""');
  const description = JSON.parse(localStorage.getItem("description") || '""');
  const image = JSON.parse(localStorage.getItem("image") || '""');
  const tag = JSON.parse(localStorage.getItem("tag") || '""');
  const date = JSON.parse(localStorage.getItem("date") || '""');
  const postIndex = parseInt(localStorage.getItem("postIndex") || "0", 10);
  const story = JSON.parse(localStorage.getItem("story") || "[]");
  const key = localStorage.getItem("postIndex");

  console.log({ head, description, image, tag, date, postIndex, story });

  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="border-b border-darkk mb-5 flex justify-between text-sm">
          <div className="text-darkk flex items-center pb-2 pr-2 border-b-2 border-black uppercase">
            <TrendingUp />
            <div className="font-semibold inline-block px-2">
              Recently Posted On Insight-Ink
            </div>
          </div>
          <div>See All</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          <Card
            head={title}
            description={description}
            image={image}
            tag={tag}
            date={date}
          />
          // key={index}
          // title={post.title}
          // content={post.description}
          // image={post.image}
          // date={post.relativeDate}
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
