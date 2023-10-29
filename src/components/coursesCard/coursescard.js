import React from "react";

function Coursescard() {
  return (
    <section id="coursescard">
      <div className="container">
        <h2>How our online public courses work</h2>
        <div className="row justify-content-center">
          <div className="column-lg-3 column-4">
            <div className="courses-card">
              <img src="assets/courses/course-1.png" />
              <div className="card-heading">
                Hands-On python & R in Data Science
              </div>
              <div className="card-detail">
                <div className="learners">
                  <span className="learner-icon"></span>
                  1,45,699
                </div>
                <div className="learners">
                  <span className="clock-icon"></span>4 months
                </div>
              </div>
              <div className="card-button text-center">
                <a href="/">View Course</a>
              </div>
            </div>
          </div>

          <div className="column-lg-3 column-4">
            <div className="courses-card">
              <img src="assets/courses/course-2.png" />
              <div className="card-heading">
                Hands-On python & R in Data Science
              </div>
              <div className="card-detail">
                <div className="learners">
                  <span className="learner-icon"></span>
                  1,45,699
                </div>
                <div className="learners">
                  <span className="clock-icon"></span>4 months
                </div>
              </div>
              <div className="card-button text-center">
                <a href="/">View Course</a>
              </div>
            </div>
          </div>
          <div className="column-lg-3 column-4">
            <div className="courses-card">
              <img src="assets/courses/course-3.png" />
              <div className="card-heading">
                Hands-On python & R in Data Science
              </div>
              <div className="card-detail">
                <div className="learners">
                  <span className="learner-icon"></span>
                  1,45,699
                </div>
                <div className="learners">
                  <span className="clock-icon"></span>4 months
                </div>
              </div>
              <div className="card-button text-center">
                <a href="/">View Course</a>
              </div>
            </div>
          </div>
          <div className="column-lg-3 column-4">
            <div className="courses-card">
              <img src="assets/courses/course-4.png" />
              <div className="card-heading">
                Hands-On python & R in Data Science
              </div>
              <div className="card-detail">
                <div className="learners">
                  <span className="learner-icon"></span>
                  1,45,699
                </div>
                <div className="learners">
                  <span className="clock-icon"></span>4 months
                </div>
              </div>
              <div className="card-button text-center">
                <a href="/">View Course</a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="/" className="view-all-course-btn">
            View all courses
          </a>
        </div>
      </div>
    </section>
  );
}

export default Coursescard;
