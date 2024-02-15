import { Navbar } from "@/components/Navbar";
import React from "react";

function Canvas() {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <input
            type="text"
            name="Canvas ID"
            placeholder="Enter canvas ID..."
          />
          <div>components</div>
        </div>
      </div>
    </div>
  );
}

export default Canvas;
