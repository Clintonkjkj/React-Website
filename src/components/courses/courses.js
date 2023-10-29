import React from "react";

const Courses = () => {
  return (
    <section id="courses">
      <div className="container  ">
        <div className="row">
          <div className="column-4">
            <div className="banner-image">
              <img
                className="img-fluid"
                src="assets/courses-images.png"
                alt="courses"
              />
            </div>
          </div>
          <div className="column-8">
            <h2>Unraveling the Mechanism of Our Online Public Courses</h2>
            <div className="list-items">
              <div className="list-item">
                <span className="list-item-icon">
                  <img src="assets/immersive.png" className="img-fluid" />
                </span>
                <p className="list-item-head">Immersive Online Education</p>
                <p>
                  Explore the world of virtual learning where the expenses are
                  limited to standard school supplies and optional field trips
                </p>
              </div>
              <div className="list-item">
                <span className="list-item-icon">
                  <img src="assets/empowering.png" className="img-fluid" />
                </span>
                <p className="list-item-head">Empowering Online Curriculum</p>
                <p>
                  Explore the world of virtual learning where the expenses are
                  limited to standard school supplies and optional field trips
                </p>
              </div>
              <div className="list-item">
                <span className="list-item-icon">
                  <img src="assets/enriching.png" className="img-fluid" />
                </span>
                <p className="list-item-head">Enriching Education</p>
                <p>
                  Explore the world of virtual learning where the expenses are
                  limited to standard school supplies and optional field trips
                </p>
              </div>
              <div className="list-item">
                <span className="list-item-icon">
                  <img src="assets/fostering.png" className="img-fluid" />
                </span>
                <p className="list-item-head">Fostering Social Connections</p>
                <p>
                  Explore the world of virtual learning where the expenses are
                  limited to standard school supplies and optional field trips
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
