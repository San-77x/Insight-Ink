import {
  SignOutButton,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function App() {
  return (
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
      initialValue="Welcome to TinyMCE!"
    />
  );
}

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <main>
//         <SignedOut>
//           <Home />
//         </SignedOut>
//         <SignedIn>
//           <Home />
//         </SignedIn>
//       </main>
//       <SignOutButton signOutCallback={() => redirect("/")} />
//       <SignInButton />
//       <Footer />
//     </div>
//   );
// }

// export default App;
