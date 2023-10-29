import React from "react";

const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="column-6 order-12">
            <img src="assets/banner-image.png" alt="banner" />
          </div>
          <div className="column-6 order-1">
            <h1>Explore top-notch courses for optimal learning experiences</h1>
            <p>
              Embark on an educational journey like never before with
              Connections Academy-an innovative, tution-free online public
              school, designed to empower students nationwide in their pursuit
              of knowledge.
            </p>
            <div className="text-left">
              <a className="get-started" href="#getstarted">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
