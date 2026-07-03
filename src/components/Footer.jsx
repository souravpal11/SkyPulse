import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer mt-5 py-4">
      <div className="container text-center">

        <h5>🌦 SkyPulse Weather</h5>

        <p>
          Real-time weather forecasts powered by Open-Meteo API.
        </p>

        <div className="social-icons mb-3">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        <p>
          Made with <FaHeart color="red" /> using React
        </p>

        <small>
          © {new Date().getFullYear()} SkyPulse All Rights Reserved.
        </small>

      </div>
    </footer>
  );
};

export default Footer;