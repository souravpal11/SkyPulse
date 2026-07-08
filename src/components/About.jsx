import React from "react";
import Developer from "../assets/images/developer.png";
import WeatherBg from "../assets/images/weather-bg.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div
        className="text-white text-center py-5"
        style={{
          backgroundImage:
            `url(${WeatherBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "450px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h1 className="display-3 text-dark fw-bold">Welcome to SkyPulse</h1>

          <p className="lead text-dark">
            Get Live Weather Updates of Your Location.
          </p>

          <Link className="btn btn-primary btn-lg mt-3" to="/">
            Weather Updates
          </Link>
        </div>
      </div>
      <div className="container my-5">
        
      </div>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-4 text-center" style={{
                width: "275px",
                height: "250px",
              }}>
            <img
              src={Developer}
              alt="Developer"
              className="rounded-circle shadow"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="col-md-8 mt-1">
            <h2>Sourav Pal</h2>

            <h5 className="text-dark">B.Tech IT Student</h5>

            <p>
              Passionate React Developer and software enthusiast. I enjoy
              building modern, responsive web applications using React,
              Bootstrap and REST APIs.
            </p>
          </div>
        </div>
      </div>
      <div className="container text-center my-5">
        <h2 className="mb-4">Skills</h2>

        <div className="d-flex justify-content-center flex-wrap gap-3">
          <span className="badge bg-primary p-3">React</span>

          <span className="badge bg-warning text-dark p-3">JavaScript</span>

          <span className="badge bg-success p-3">Bootstrap</span>

          <span className="badge bg-danger p-3">HTML5</span>

          <span className="badge bg-info p-3">CSS3</span>

          <span className="badge bg-dark p-3">REST API</span>
        </div>
      </div>

      <div className="container text-center my-5">
        <h2>Connect With Me</h2>

        <div className="mt-4 d-flex justify-content-center gap-4">
          <a
            href="https://github.com/souravpal11"
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            <i className="fa-brands fa-github me-2"></i>
             GitHub
          </a>

          <a
            href="https://linkedin.com/in/sourav-pal-4195aa380"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <i className="fa-brands fa-linkedin me-2"></i>
             LinkedIn
          </a>

          <a href="https://souravsir2008@gmail.com" className="btn btn-danger">
            <i className="fa-solid fa-envelope me-2"></i>
             Email
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
