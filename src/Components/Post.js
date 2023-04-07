import React from "react";
import './Post.css'
function Post() {
  return (
    <div className="post">
      <h1>Position of Responsibility</h1>
      <div id="button-container">
        <button type="button" id="mainbtn">
          Postitions
        </button>
        <div id="menu">
          <button type="button" class="btn" id="btn1">
            Executive
          </button>
          <button type="button" class="btn" id="btn2">
            Designer
          </button>
          <button type="button" class="btn" id="btn3">
            Core Team
          </button>
          <button type="button" class="btn" id="btn4">
            Member
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
