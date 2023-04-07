import React from "react";
import "./Projects.css";
import amazon from './img/amazon.jpeg';
import netflix from './img/netflix.jpg'
import intro from './img/myintro.jpeg';
import res from './img/resume.jpeg';
function Projects() {
  const prodata = [
    { name: "Amazon", des: "A React based multiple pages project with basic HTML and advanced CSS, using react and materials UI created form to login users and can register new users.", imge: amazon ,link:"https://github.com/shreeporwal07/Amazon" },
    { name: "Netflix", des: "A basic React based single page project, used basic React and CSS to create the single page displayed, and to test my knowledge on embedding transitions", imge: netflix,link:"https://github.com/shreeporwal07/Netflix" },
  ];
  const prodata2 = [
    { name: "My Intro", des: "Build this project to check my hold on HTML and CSS, using this project I learned to add photos and some designing to my web page.", imge: intro,link:"https://github.com/shreeporwal07/My-Intro" },
    { name: "Resume", des: "Beginner HTML and CSS project which I build as a practice project", imge: res,link:"https://github.com/shreeporwal07/Resume" },
  ];
  return (
    <div className="projects">
      <div className="head">
        <h1>
          <span>My Projects</span>
        </h1>
        <hr
          style={{
            width: "100%",
            alignItems: "center",
            position: "relative",
            justifyContent: "center",
            marginBottom:"-5%"
          }}
        ></hr>
      </div>
      <div className="wrapper">
      {prodata.map((data, i) => (
              <div key={i} className="card">
                <img src={data.imge} alt="" />
                <div className="info">
                    <h1>{data.name}</h1>
                  <p>{data.des}</p>
                  <button className="km"><a href={data.link} target="new">View Project</a></button>
                </div>
              </div>
          ))}
      </div>
      <div className="wrapper">
      {prodata2.map((data, i) => (
              <div key={i} className="card">
                <img src={data.imge} alt="" />
                <div className="info">
                    <h1>{data.name}</h1>
                  <p>{data.des}</p>
                  <button className="km"><a href={data.link} target="new">View Project</a></button>
                </div>
              </div>
          ))}
      </div>
    </div>
  );
}

export default Projects;
