import { Alert } from "@/components/Alert";
import { Button } from "@/components/ui/button";
import {
  Link,
  Navigate,
  createLazyFileRoute,
  redirect,
  useNavigate,
} from "@tanstack/react-router";
import { Editor } from "@tinymce/tinymce-react";

export const Route = createLazyFileRoute("/canvas")({
  component: Canvas,
});

function Canvas() {
  const handleClick = () => {};
  return (
    <div className="mx-auto max-w-[1680px]">
      <div className="flex justify-end my-4 mx-4">
        <Button
          onClick={handleClick}
          variant={"destructive"}
          className="rounded-md bg-red-500 hover:bg-red-700 mx-2"
        >
          Cancel
        </Button>
        <Alert
          title={"Are you sure?"}
          description={"This may cause clear your writings"}
        >
          Cancelll
        </Alert>
        <Button
          variant={"destructive"}
          className="rounded-md bg-green-500 hover:bg-green-700 px-8"
        >
          Publish
        </Button>
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
          init={{
            plugins:
              "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss",
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
            tinycomments_mode: "embedded",
            tinycomments_author: "Author name",
            mergetags_list: [
              { value: "First.Name", title: "First Name" },
              { value: "Email", title: "Email" },
            ],
            ai_request: (request, respondWith) =>
              respondWith.string(() =>
                Promise.reject("See docs to implement AI Assistant")
              ),
          }}
          initialValue=""
        />
      </div>
    </div>
  );
}
