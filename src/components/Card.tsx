import { Clock, MessageSquareText } from "lucide-react";
import { Button } from "./ui/button";

function Card({ comments = "0 Comments" }: { comments: string }) {
  const head = JSON.parse(localStorage.getItem("head") || '""');
  const description = JSON.parse(localStorage.getItem("description") || '""');
  const image = JSON.parse(localStorage.getItem("image") || '""');
  const tag = JSON.parse(localStorage.getItem("tag") || '""');
  const date = JSON.parse(localStorage.getItem("date") || '""');
  const postIndex = parseInt(localStorage.getItem("postIndex") || "0", 10);
  console.log({ head, description, image, tag, date, postIndex });

  return (
    <>
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

        <h3 className="font-semibold text-lg m-4 shrink-0">{head}</h3>
        <p
          className="text-gray-500 text-sm overflow-hidden grow mx-5"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: description }}
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
    </>
  );
}
export default Card;
