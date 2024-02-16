import App from "@/App";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Editor } from "@tinymce/tinymce-react";

export const Route = createLazyFileRoute("/canvas")({
  component: Canvas,
});

function Canvas() {
  return (
    <>
      <App />
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
    </>
  );
}
