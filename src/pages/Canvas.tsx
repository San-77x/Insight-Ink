import { Navbar } from "@/components/Navbar";
import {
  ALargeSmall,
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  ImagePlus,
  Italic,
  Link,
  List,
  ListOrdered,
  Quote,
  Redo,
  RemoveFormatting,
  Smile,
  Strikethrough,
  Type,
  Underline,
  Undo,
} from "lucide-react";
function Canvas() {
  return (
    <div className="bg-gray-100 h-screen">
      <div>
        <Navbar />
        <div>
          <div className="">
            <input
              className="bg-gray-300 w-full h-16 rounded-md mt-4 max-w-[800px] flex  mx-auto p-5 mb-5"
              type="text"
              name="title"
              placeholder="Title"
            />
            <div>
              <ul className="flex  bg-white p-2 mx-auto text-sm font-medium rounded-lg shadow-md">
                <div className="flex px-2 border-x  ">
                  <li>
                    <Undo />
                  </li>
                  <li>
                    <Redo />
                  </li>
                </div>
                <div className="flex px-2 border-r  ">
                  <li>
                    <Type />
                  </li>
                  <li>
                    <ALargeSmall />
                  </li>
                  <li>Normal</li>
                </div>
                <li>
                  <Bold />
                </li>
                <li>
                  <Italic />
                </li>
                <li>
                  <Underline />
                </li>
                <li>
                  <Strikethrough />
                </li>
                <li>
                  <Link />
                </li>
                <li>
                  <ImagePlus />
                </li>
                <li>
                  <Smile />
                </li>
                <li>
                  <AlignLeft />
                </li>
                <li>
                  <AlignCenter />
                </li>
                <li>
                  <AlignRight />
                </li>
                <li>
                  <AlignJustify />
                </li>
                <li>
                  <List />
                </li>
                <li>
                  <ListOrdered />
                </li>
                <li>
                  <Quote />
                </li>
                <li>
                  <RemoveFormatting />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Canvas;
