import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import {
  GrFacebook,
  GrYoutube,
  GrLinkedin,
  GrInstagram,
  GrTwitter,
} from "react-icons/gr";
import { FaSlideshare } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";

class Project extends React.Component {
  render() {
    return (
      <span>
        {/* -----------------navigation bar------------- */}

        <ReactBootStrap.Navbar bg="#1D65C2" expand="sm">
          <img src={require("./img2.png")} alt="logo" style={{ width: 100 }} />
          <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <ReactBootStrap.Nav.Link href="#home">
                Home
              </ReactBootStrap.Nav.Link>

              <ReactBootStrap.Nav.Link href="#about">
                About
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#product">
                Product
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#services">
                Services
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>

        <br></br>

        <center>
          <img
            src={require("./fig.png")}
            width="300px"
            height="200px"
            alt="logo"
          />
          <h1>
            "I WENT THROUGH EVERY ACCOUNT-BASED MARKETING WEBINAR, TALK & EBOOK
            AND HERE'S THE BEST OF THEM!"
          </h1>
          <p style={{ color: "grey" }}>
            Note : ABM is strategy, below mentioned are tactics & techniques
          </p>
        </center>
        <p
          style={{
            background: "#0275d8",
            color: "whitesmoke",
            padding: 10,
            fontSize: 25,
          }}
        >
          Table of Contents
        </p>
        <p padding="20px">
          <button
            style={{
              background: "black",
              color: "white",
              borderRadius: 5,

              width: 35,
              height: 35,
            }}
          >
            <b> 1</b>
          </button>{" "}
          Benchmarks & Results of Account-Based Marketing
          <br></br>
          <br></br>
          <button
            style={{
              background: "black",
              color: "white",
              borderRadius: 5,
              width: 35,
              height: 35,
            }}
          >
            <b>2</b>
          </button>{" "}
          ABM examples vs B2B Demand Generation
          <br></br>
          <br></br>
          <button
            style={{
              background: "black",
              color: "white",
              borderRadius: 5,
              width: 35,
              height: 35,
            }}
          >
            <b>3</b>
          </button>{" "}
          How to use old content & better messaging (Video: skip to 13.37 mins
          mark)
          <br></br>
          <br></br>
          <button
            style={{
              background: "black",
              color: "white",
              borderRadius: 5,
              width: 35,
              height: 35,
            }}
          >
            <b>4</b>
          </button>{" "}
          Why sales in ABM?
          <br></br>
          <br></br>
          <button
            style={{
              background: "black",
              color: "white",
              borderRadius: 5,
              width: 35,
              height: 35,
            }}
          >
            <b>5</b>
          </button>{" "}
          Sales responsibility in ABM
          <br></br>
          <br></br>
          <button
            style={{
              background: "black",
              color: "white",
              borderRadius: 5,
              width: 35,
              height: 35,
            }}
          >
            <b>6</b>
          </button>{" "}
          Backend & Tech Stack for ABM (For scaling)
          <br></br>
          <br></br>
          <button
            style={{
              background: "black",
              color: "white",
              borderRadius: 5,
              width: 35,
              height: 35,
            }}
          >
            <b>7</b>
          </button>{" "}
          Points to Note before starting
          <br></br>
          <br></br>
          <button
            style={{
              background: "black",
              color: "white",
              borderRadius: 5,
              width: 35,
              height: 35,
            }}
          >
            <b>8</b>
          </button>{" "}
          How to Select Accounts (The 5 Levels)
          <br></br>
          <br></br>
          <button
            style={{
              background: "black",
              color: "white",
              borderRadius: 5,
              width: 35,
              height: 35,
            }}
          >
            <b>9</b>
          </button>{" "}
          BizAmp's Step by Step ABM Pilot
          <br></br>
        </p>

        <a href="#1">
          <p
            style={{
              background: "#0275d8",
              color: "whitesmoke",
              padding: 10,
              fontSize: 15,
            }}
          >
            <button
              style={{
                background: "white",
                color: "black",
                borderRadius: 8,
                width: 40,
                height: 40,
              }}
            >
              <b>1</b>
            </button>{" "}
            <b>Benchmarks & Results of Account-Based Marketing</b>
          </p>
        </a>
        <a href="#2">
          <p
            style={{
              background: "#0275d8",
              color: "whitesmoke",
              padding: 10,
              fontSize: 15,
            }}
          >
            <button
              style={{
                background: "white",
                color: "black",
                borderRadius: 8,
                width: 40,
                height: 40,
              }}
            >
              <b>2</b>
            </button>{" "}
            <b> ABM examples vs B2B Demand Generation</b>
          </p>
        </a>

        <a href="#3">
          <p
            style={{
              background: "#0275d8",
              color: "whitesmoke",

              padding: 10,
              fontSize: 15,
            }}
          >
            <button
              style={{
                background: "white",
                color: "black",
                borderRadius: 8,
                width: 40,
                height: 40,
              }}
            >
              <b>3</b>
            </button>{" "}
            <b>
              How to use old content & better messaging (Video: skip to 13.37
              mins mark)
            </b>
          </p>
        </a>
        <a href="#4">
          <p
            style={{
              background: "#0275d8",
              color: "whitesmoke",
              padding: 10,
              fontSize: 15,
            }}
          >
            <button
              style={{
                background: "white",
                color: "black",
                borderRadius: 8,
                width: 40,
                height: 40,
              }}
            >
              <b>4</b>
            </button>{" "}
            <b>Why sales in ABM?</b>
          </p>
        </a>
        <a href="#5">
          <p
            style={{
              background: "#0275d8",
              color: "whitesmoke",
              padding: 10,
              fontSize: 15,
            }}
          >
            <button
              style={{
                background: "white",
                color: "black",
                borderRadius: 8,
                width: 40,
                height: 40,
              }}
            >
              <b>5</b>
            </button>{" "}
            <b>Sales responsibility in ABM</b>
          </p>
        </a>
        <a href="#6">
          <p
            style={{
              background: "#0275d8",
              color: "whitesmoke",
              padding: 10,
              fontSize: 15,
            }}
          >
            <button
              style={{
                background: "white",
                color: "black",
                borderRadius: 8,
                width: 40,
                height: 40,
              }}
            >
              <b>6</b>
            </button>{" "}
            <b>Backend & Tech Stack for ABM (For scaling)</b>
          </p>
        </a>
        <a href="#7">
          <p
            style={{
              background: "#0275d8",
              color: "whitesmoke",
              padding: 10,
              fontSize: 15,
            }}
          >
            <button
              style={{
                background: "white",
                color: "black",
                borderRadius: 8,
                width: 40,
                height: 40,
              }}
            >
              <b>7</b>
            </button>{" "}
            <b> Points to Note before starting</b>
          </p>
        </a>
        <a href="#8">
          <p
            style={{
              background: "#0275d8",
              color: "whitesmoke",
              padding: 10,
              fontSize: 15,
            }}
          >
            <button
              style={{
                background: "white",
                color: "black",
                borderRadius: 8,
                width: 40,
                height: 40,
              }}
            >
              <b>8</b>
            </button>{" "}
            <b> How to Select Accounts (The 5 Levels)</b>
          </p>
        </a>
        <a href="#9">
          <p
            style={{
              background: "#0275d8",
              color: "whitesmoke",
              padding: 10,
              fontSize: 15,
            }}
          >
            <button
              style={{
                background: "white",
                color: "black",
                borderRadius: 8,
                width: 40,
                height: 40,
              }}
            >
              <b>9</b>
            </button>{" "}
            <b>BizAmp's Step by Step ABM Pilot</b>
          </p>
        </a>

        {/* ----------footer---------- */}

        <footer>
          <center>
            <b style={{ paddingTop: 30 }}>
              Home {">>"} Pricing {">>"}
              <font color="#348aec">
                <a href="https://bizamps.com/b2b-marketing-package">
                  {" "}
                  B2B Marketing Packages{" "}
                </a>
              </font>
            </b>
          </center>
          <br></br>

          <div
            style={{
              background: "#00264d",
              height: 250,
              color: "white",
              padding: 10,
            }}
          >
            <br></br>{" "}
            <center>
              <a
                href="https://www.youtube.com/channel/UCdEdhgYoVI73IR21AmylKRw"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <span style={{ paddingLeft: 15 }}>
                  <GrYoutube></GrYoutube>
                </span>
              </a>
              <a
                href="https://www.slideshare.net/AkshatKharbanda"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ paddingLeft: 15 }}>
                  <FaSlideshare></FaSlideshare>
                </span>
              </a>
              <a
                href="https://in.linkedin.com/company/biz-amps"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ paddingLeft: 15 }}>
                  <GrLinkedin></GrLinkedin>
                </span>
              </a>
              <a
                href="https://www.instagram.com/bizamps/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ paddingLeft: 15 }}>
                  <GrInstagram></GrInstagram>
                </span>
              </a>
              <a
                href="https://www.facebook.com/businessamplifiers/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ paddingLeft: 15 }}>
                  <GrFacebook></GrFacebook>
                </span>
              </a>
              <a
                href="https://twitter.com/bizamp_branding"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ paddingLeft: 15 }}>
                  <GrTwitter></GrTwitter>
                </span>
              </a>
              <br />
              <br />
              <div
                className="border-top mx-5"
                style={{ paddingLeft: 50 }}
              ></div>
              <br />

              <p>
                BizAmps is B2B marketing consultancy based out of India. The
                team is spread across Delhi NCR, Chandigarh & Mumbai
              </p>
              <p>All Rights Reserved © Copyright 2020</p>
            </center>
          </div>
        </footer>
      </span>
    );
  }
}

const element = <Project></Project>;
ReactDOM.render(element, document.getElementById("root"));
