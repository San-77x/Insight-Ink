import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@/components/ui/button";
import { createLazyFileRoute } from "@tanstack/react-router";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import moment from "moment";
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
import { Link } from "@tanstack/react-router";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const Route = createLazyFileRoute("/canvas")({
  component: Canvas,
});

export default function Canvas() {
  const [showAlert, setShowAlert] = useState(false);
  const title = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLTextAreaElement>(null);
  const image = useRef<HTMLInputElement>(null);
  const editorRef = useRef<any>(null);
  const [selectedTag, setTag] = useState<string>();

  const convertToBase64 = (file: Blob): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });

  const checkFields = () => {
    if (
      !title.current?.value ||
      !content.current?.value ||
      !selectedTag ||
      !image.current?.value ||
      !editorRef.current?.getContent()
    ) {
      setShowAlert(true);
      console.log("Value missing");
    } else {
      console.log("Successfully Saved");
      saveData();
    }
  };

  const saveData = async () => {
    window.location.href = "/";
    const base64Image = await convertToBase64(image.current.files[0]);
    const currentIndex = parseInt(localStorage.getItem("postIndex") || "0", 10);
    const now = moment();
    const relativeDate = now.fromNow();

    const data = {
      story: editorRef.current.getContent(),
      title: title.current?.value,
      content: content.current?.value,
      tag: selectedTag,
      image: base64Image,
      relativeDate: relativeDate,
    };
    console.log(data);

    const key = `post-${currentIndex}`;
    localStorage.setItem("story", JSON.stringify(data.story));
    localStorage.setItem("head", JSON.stringify(data.title));
    localStorage.setItem("description", JSON.stringify(data.content));
    localStorage.setItem("tag", JSON.stringify(data.tag));
    localStorage.setItem("image", JSON.stringify(data.image));
    localStorage.setItem("date", JSON.stringify(data.relativeDate));
    localStorage.setItem("postIndex", (currentIndex + 1).toString());
    console.log(key);
  };
  return (
    <div className="mx-auto max-w-[1680px]">
      <div className="flex justify-end my-4 mx-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant={"destructive"}
              className="rounded-md bg-red-500 hover:bg-red-700 mx-2"
            >
              Clear
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This may cause clear your writings
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-litee hover:bg-slate-400">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction className="bg-red-500 hover:bg-red-700">
                <Link to="/"> Continue</Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

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
                Add Description, Cover image, Approppriate tags and then Click
                Publish.
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
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="tags">Tag</Label>
                <Select
                  onValueChange={(v) => {
                    setTag(v);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Proper Tag" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Tech">Tech</SelectItem>
                      <SelectItem value="Food">Food</SelectItem>
                      <SelectItem value="Trip">Trip</SelectItem>
                      <SelectItem value="Web">Web</SelectItem>
                      <SelectItem value="Robotics">Robotics</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {showAlert && (
              <div>
                <Link to="/canvas" />
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Missing field Found.</AlertTitle>
                  <AlertDescription>
                    Fill all Field to upload on Insight-Ink.
                  </AlertDescription>
                </Alert>
              </div>
            )}
            <DialogFooter>
              <Button
                onClick={checkFields}
                variant={"outline"}
                className="bg-green-500 hover:bg-green-700 w-full"
              >
                Publish the Blog
              </Button>
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
