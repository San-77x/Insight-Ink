import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Alert } from "@/components/Alert";
import { Button } from "@/components/ui/button";
import { createLazyFileRoute } from "@tanstack/react-router";
import moment from "moment";

export const Route = createLazyFileRoute("/canvas")({
  component: Canvas,
});

export default function Canvas() {
  const title = useRef<HTMLInputElement>(null);
  const editorRef = useRef(null);

  const saveData = () => {
    if (title.current?.value && editorRef.current) {
      const currentIndex = parseInt(
        localStorage.getItem("postIndex") || "0",
        10
      );
      const now = moment();
      const relativeDate = now.fromNow();

      const data = {
        title: title.current.value,
        content: editorRef.current.getContent(),
        relativeDate: relativeDate,
      };

      const key = `post-${currentIndex}`;

      localStorage.setItem(key, JSON.stringify(data));
      localStorage.setItem("postIndex", (currentIndex + 1).toString());

      console.log("Title:", data.title);
      console.log("Content:", data.content);
      console.log("Date:", data.date);
      console.log("Relative Date:", data.relativeDate);
      console.log("Key:", key);

      alert("Post saved successfully");
    } else {
      alert("Title or content is missing.");
    }
  };

  return (
    <div className="mx-auto max-w-[1680px]">
      <div className="flex justify-end my-4 mx-4">
        <Alert
          title={"Are you sure?"}
          description={"This may cause clear your writings"}
        >
          <Button
            variant={"destructive"}
            className="rounded-md bg-red-500 hover:bg-red-700 mx-2"
          >
            Cancel
          </Button>
        </Alert>
        <Alert
          title={"Are you sure to upload this?"}
          description={"This will upload your writings into Insight Ink"}
          data={saveData}
        >
          <Button
            variant={"destructive"}
            className="rounded-md bg-green-500 hover:bg-green-700 px-8"
          >
            Publish
          </Button>
        </Alert>
      </div>

      <div className="border-2 border-gray-100 mt-8 mb-2 rounded-lg mx-6">
        <input
          ref={title}
          type="text"
          placeholder="Title here..."
          className="p-4 outline-none text-2xl font-semibold font-serif tracking-wider "
        />
      </div>
      <div className="mx-6">
        <Editor
          apiKey="9up3sus9pfi6irjmqe37klb34vh2s7iddwao2gs6tih9wr9e"
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
    </div>
  );
}
