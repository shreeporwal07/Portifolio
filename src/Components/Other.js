import React from "react";
import "./Other.css";
import git from "./img/git.png";
import force from "./img/force.png";
import chef from "./img/chef.png";
import lc from "./img/leet.png";
function Other() {
  return (
    <div className="other">
      <div className="data">
        <h1>
          <span>Other Platforms</span>
        </h1>
        <hr style={{ width: "100%" }}></hr>
        <div
          className="data2"
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img src={lc} onClick={()=>window.open('https://leetcode.com/shreeporwal07/','blank')}/>
          <img src={chef} onClick={()=>window.open('https://www.codechef.com/users/shreeporwal07','blank')}/>
          <img src={force} onClick={()=>window.open('https://codeforces.com/profile/shreeporwal07','blank')}/>
          <img src={git} onClick={()=>window.open('https://github.com/shreeporwal07','blank')}/>
        </div>
      </div>
    </div>
  );
}
export default Other;
