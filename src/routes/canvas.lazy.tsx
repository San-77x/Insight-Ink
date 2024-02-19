import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Alert } from "@/components/Alert";
import { Button } from "@/components/ui/button";
import { createLazyFileRoute } from "@tanstack/react-router";
import moment from "moment";
import DescriptionCard from "@/components/DescriptionCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createLazyFileRoute("/canvas")({
  component: Canvas,
});

export default function Canvas() {
  const title = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLTextAreaElement>(null);
  const tag = useRef<HTMLInputElement>(null);
  const image = useRef<HTMLInputElement>(null);

  const saveData = () => {
    if (
      title.current?.value &&
      content.current?.value &&
      tag.current?.value &&
      image.current?.value
    ) {
      const currentIndex = parseInt(
        localStorage.getItem("postIndex") || "0",
        10
      );
      const now = moment();
      const relativeDate = now.fromNow();

      const data = {
        title: title.current.value,
        content: content.current.value,
        tag: tag.current.value,
        image: image.current.value,
        relativeDate: relativeDate,
      };
      const key = `post-${currentIndex}`;
      localStorage.setItem("head", JSON.stringify(data.title));
      localStorage.setItem("description", JSON.stringify(data.content));
      localStorage.setItem("tag", JSON.stringify(data.tag));
      localStorage.setItem("image", JSON.stringify(data.image));
      localStorage.setItem("date", JSON.stringify(data.relativeDate));
      localStorage.setItem("postIndex", (currentIndex + 1).toString());
      console.log(key);
    } else {
      alert("Found Missing Field");
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

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant={"destructive"}
              className="rounded-md bg-green-500 hover:bg-green-700 px-8"
            >
              Publish
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add these fields to Publish</DialogTitle>
              <DialogDescription>
                Add Description, Cover image, Tag. Click Publish when you're
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Picture</Label>
                <Input ref={image} id="picture" type="file" />
              </div>

              <div className="grid w-full gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  ref={content}
                  placeholder="Type a short description here."
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="tags">Tag</Label>
                <Input ref={tag} type="text" placeholder="Add a Suitable Tag" />
              </div>
            </div>
            <DialogFooter>
              <Alert
                title={"Are you sure to upload this?"}
                description={"This will upload your writings into Insight Ink"}
                data={saveData}
              >
                <Button variant={"outline"} type="submit">
                  Publish the Blog
                </Button>
              </Alert>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
