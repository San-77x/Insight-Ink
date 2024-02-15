import { Clock, MessageSquareText } from "lucide-react";
import { Button } from "./ui/button";
type prop = {
  tag: string;
  image: string;
  title: string;
  description: string;
  time?: string;
  comments?: string;
};
function Card({
  tag,
  image,
  title,
  description,
  time = "Not Avaialable",
  comments = "0 Comments",
}: prop) {
  return (
    <div>
      <div className="rounded overflow-hidden shadow-lg flex flex-col h-[500px]">
        <div className="relative">
          <a href="/">
            <img
              className="w-full h-[250px] md:h-[200px]"
              src={image}
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
          </a>
          <a href="#!">
            <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              {tag}
            </div>
          </a>
        </div>
        <div className="px-6 py-4 mb-auto">
          <div className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
            {title}
          </div>
          <p className="text-gray-500 text-sm">{description}</p>
          <Button
            size={"sm"}
            variant={"destructive"}
            className="w-full bg-zinc-500 hover:bg-zinc-400 my-5"
          >
            Read More
          </Button>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
          <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
            <Clock size={16} />
            <span className="ml-1"> {time} </span>
          </span>
          <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
            <MessageSquareText size={16} />
            <span className="ml-1">{comments}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
