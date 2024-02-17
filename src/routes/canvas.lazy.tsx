import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Alert } from "@/components/Alert";
import { Button } from "@/components/ui/button";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/canvas")({
  component: Canvas,
});

function Canvas() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
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
          data={log}
        >
          <Button
            variant={"destructive"}
            className="rounded-md bg-green-500 hover:bg-green-700 px-8"
          >
            Publish
          </Button>
        </Alert>
      </div>
      <div className="border-2 my-8 lg:mx-32 rounded-lg p-6 mx-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full h-full outline-none text-3xl font-semibold font-serif "
        />
      </div>
      <div className="mx-4">
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
