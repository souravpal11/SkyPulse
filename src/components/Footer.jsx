import React from "react";
import { FaGithub, FaLinkedin,} from "react-icons/fa";
import Lottie from "lottie-react";
import cloudysun from "../assets/lottie/sunclouds.json"

const Footer = () => {
  return (
    <footer className="footer mt-5 py-4">
      <div className="container text-center">
        <div className="d-flex align-items-center justify-content-center">
        <Lottie animationData={cloudysun} style={{ width: 40, height: 40 }} />
        <h5 className="mb-0 ms-1"> SkyPulse</h5>
        </div>
        <p>
          Real-time weather forecasts powered by Open-Meteo API.
        </p>

        <div className="social-icons mb-3">
          <a
            href="https://github.com/souravpal11"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://linkedin.com/in/sourav-pal-4195aa380"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        <small>
          © {new Date().getFullYear()} SkyPulse All Rights Reserved.
        </small>

      </div>
    </footer>
  );
};

export default Footer;