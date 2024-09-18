import React from "react";
import "./Projects.css";
import fv from './img/fv.png';
import netflix from './img/netflix.jpg'
import sskti from './img/sskti.png';
import rogr from './img/rogr.png';
function Projects() {
  const prodata = [
    { name: "FinVue", des: "A finance learning app featuring real-time charts, a dummy stock market game, and comprehensive financial management tools.", imge: fv ,link:"https://finvue-umber.vercel.app/" },
    { name: "StreeShakti", des: "A women empowerment app with real-time location sharing, fitness and period trackers, and emergency call features.", imge: sskti,link:"https://stree-shakti.vercel.app/" },
  ];
  const prodata2 = [
    { name: "RogRaksha", des: "A healthcare companion app with appointment scheduling, emergency services, and medication reminders.", imge: rogr,link:"https://rog-raksha.vercel.app/" },
    { name: "Netflix", des: "A basic React based single page project, used basic React and CSS to create the single page displayed, and to test my knowledge on embedding transitions", imge: netflix,link:"https://github.com/shreeporwal07/Netflix" },
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
                  <button style={{borderRadius:"0.5rem"}}><a href={data.link} target="new">View Project</a></button>
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
                  <button style={{borderRadius:"0.5rem"}}><a href={data.link} target="new">View Project</a></button>
                </div>
              </div>
          ))}
      </div>
    </div>
  );
}

export default Projects;
