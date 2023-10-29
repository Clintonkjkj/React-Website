import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="column-lg-3 column-6">
            <div className="footer-widget">
              <p>
                <img
                  src="assets/Logo.png"
                  alt="logo"
                  className="img-fluid"
                ></img>
              </p>
              <p>
                Our motto is to fulfill customer demands by making them
                satisfied with growing their businesses
              </p>
            </div>
          </div>
          <div className="column-lg-3 column-6">
            <div className="footer-widget">
              <p className="footer-widget-heading">About</p>
              <ul>
                <li>
                  <a href="/">About Us</a>{" "}
                </li>
                <li>
                  <a href="/">Features</a>{" "}
                </li>
                <li>
                  <a href="/">News</a>{" "}
                </li>
                <li>
                  <a href="/">Careers</a>{" "}
                </li>
                <li>
                  <a href="/">FAQ</a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="column-lg-3 column-6">
            <div className="footer-widget">
              <p className="footer-widget-heading">Support</p>
              <ul>
                <li>
                  <a href="/">Account</a>{" "}
                </li>
                <li>
                  <a href="/">Support Center</a>{" "}
                </li>
                <li>
                  <a href="/">Feedback</a>{" "}
                </li>
                <li>
                  <a href="/">Contact Us</a>{" "}
                </li>
                <li>
                  <a href="/">Accessibility</a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="column-lg-3 column-6">
            <div className="footer-widget">
              <p className="footer-widget-heading">Get Our App</p>
              <p>
                <a href="/" alt="google">
                  <img src="assets/google-play.png" className="img-fluid" />
                </a>
              </p>
              <p>
                <a href="/" alt="app">
                  <img src="assets/app-store.png" className="img-fluid" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="copyright">
          ©Copyright Intellipaat 2023 All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
