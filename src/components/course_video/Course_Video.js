import React from "react";

function Course_Video() {
  return (
    <section id="courses-video">
      <div className="container">
        <div className="row align-items-center">
          <div className="column-6">
            <h2>Transform Your life through education</h2>
            <p>
              Ariel Hocsman launched a new career in software development by
              taking courses in besnic. What will you be able to do
            </p>
            <div className="text-left">
              <a className="get-started" href="/">
                Get Started
              </a>
            </div>
          </div>
          <div className="column-6">
            <div className="courses-video-wrapper">
              <img src="assets/course-vid.png" />
              <span className="video-play-icon "></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course_Video;
