import React from "react";
import "./About.css";
import { Box, Grid, Divider, Typography, CardMedia } from "@mui/material";
import c from "./img/icons8-c-programming-144.png";
import cpp from "./img/icons8-c++-144.png";
import html from "./img/icons8-html-64.png";
import css from "./img/icons8-css3-144.png";
import reac from "./img/icons8-react-100.png";
import js from "./img/icons8-javascript-logo-64.png";
import mui from "./img/icons8-material-ui-144.png";
import bs from "./img/icons8-bootstrap-144.png";
import canva from "./img/icons8-canva-144.png";
import gh from "./img/icons8-github-96.png";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
function handleClick() {
  window.location.href = "/Contact";
}
function About() {
  return (
    <div className="about">
      <div className="about1">
        <h1>
          <span>About&nbsp;</span>
          <span>me</span>
        </h1>
        <hr style={{ width: "100%" }}></hr>
        <p>
          I am a 2nd year undergraduate B.Tech Electrical Engineer from MNIT,
          Jaipur with a strong background in software engineering. I am skilled
          in web development, competitive programming, data structures and
          algorithms and always eager to learn more new things ahead.<br></br>
          As an active member of the technical society, I have great dedication
          and enthusiasm towards my work. I am a crucial{" "}
          <b>member of the web team of the DSW website</b>, where I has
          contributed my skills to enhance the website's user experience and
          functionality.
          {/* My technical skills and problem-solving abilities make me a valuable
          asset to any team. I am passionate about learning and staying
          up-to-date with the latest developments in the field of technology,
          which allows me to bring innovative ideas and solutions to the table. */}
        </p>
        <h3
          style={{
            color: "white",
            fontSize: "3.2vh",
            fontWeight: "600",
            fontFamily: "Cardo",
            marginTop: "3%",
            marginBottom: "0%",
            padding: "0%",
          }}
        >
          Achievements:
        </h3>
        <p style={{ margin: "0%", padding: "0%" }}>
          <ul>
            <li>FrontEnd Developer in web team of DSW Website, MNIT Jaipur</li>
            <li>2-Star at CodeChef (Highest Rating =1438)</li>
            <li>250+ Questions solved across various platforms.</li>
          </ul>
        </p>
        <h6 className="p2">
          Institute Id : 2021UEE1486<br></br>
          Email Id: <b>shreeporwal07@gmail.com</b>,{" "}
          <b>2021uee1486@mnit.ac.in</b>
          <br></br>
          Address: Ganj Muhal, Lakhna, Etawah, Uttar Pradesh
        </h6>
        <div className="km">
          <button onClick={handleClick}>
            <div>Contact me</div><KeyboardDoubleArrowRightIcon className="arrow"/>
          </button>
        </div>
      </div>
      <div className="about2">
        <h2>Skills</h2>
        <div style={{ justifyContent: "center" }}>
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            padding={3}
            justifyContent="center"
            textAlign="center"
            className="grid"
          >
            <img src={c} style={{ height: "12vh" }} />
            <img src={cpp} style={{ height: "12vh" }} />
            <img src={html} style={{ height: "12vh" }} />
            <img src={css} style={{ height: "12vh" }} />
            <img src={reac} style={{ height: "12vh" }} />
            <img src={js} style={{ height: "12vh" }} />
            <img src={mui} style={{ height: "12vh" }} />
            <img src={bs} style={{ height: "12vh" }} />
            <img src={gh} style={{ height: "12vh" }} />
            <img src={canva} style={{ height: "12vh" }} />
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default About;
