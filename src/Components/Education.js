import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import Footer from "./Footer";
import "./Edu.css";
function Education() {
  return (
    <div style={{ marginTop: "10vh", height: "75vh" }}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(235, 35, 181, 1.0)",
            background:
              "-webkit-linear-gradient(top, rgba(235, 35, 181, 1.0), rgba(33, 20, 54, 1.0))",
            background:
              "-moz-linear-gradient(top, rgba(235, 35, 181, 1.0), rgba(33, 20, 54, 1.0))",
            background:
              "linear-gradient(to bottom, rgba(235, 35, 181, 1.0), rgba(33, 20, 54, 1.0))",
            color: "white",
          }}
          contentArrowStyle={{ borderRight: '7px solid  "white")' }}
          date="2021-2025"
          dateClassName="dd"
          // iconStyle={{ background: "white", color: "red" ,filter:"none"}}
          // icon={<img src="https://media.ma-no.org/imgr/1280-640/admin-07_visual_css_gradient_generator.jpg"/>}
        >
          <h3 className="vertical-timeline-element-title">
            B.Tech (Electrical Engineering)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">MNIT,JAIPUR</h4>
          <p>CGPA: 8.96 (current)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(235, 35, 181, 1.0)",
            background:
              "-webkit-linear-gradient(top, rgba(235, 35, 181, 1.0), rgba(33, 20, 54, 1.0))",
            background:
              "-moz-linear-gradient(top, rgba(235, 35, 181, 1.0), rgba(33, 20, 54, 1.0))",
            background:
              "linear-gradient(to bottom, rgba(235, 35, 181, 1.0), rgba(33, 20, 54, 1.0))",
            color: "white",
          }}
          date="2019 - 2020"
          dateClassName="dd"
          // iconStyle={{ background: "white", color: "red",filter:"none" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            12th (Intermediate)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">MLZS,ETAWAH</h4>
          <p>Percentage: 96%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(235, 35, 181, 1.0)",
            background:
              "-webkit-linear-gradient(top, rgba(235, 35, 181, 1.0), rgba(33, 20, 54, 1.0))",
            background:
              "-moz-linear-gradient(top, rgba(235, 35, 181, 1.0), rgba(33, 20, 54, 1.0))",
            background:
              "linear-gradient(to bottom, rgba(235, 35, 181, 1.0), rgba(33, 20, 54, 1.0))",
            color: "white",
          }}
          date="2017 - 2018"
          dateClassName="dd"
          // iconStyle={{ background: "white", color: "red",filter:"none" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            10th (Matriculation)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">MLZS, ETAWAH</h4>
          <p>Percentage: 92.2%</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Education;
