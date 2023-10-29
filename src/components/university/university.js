import React from "react";

const University = () => {
  return (
    <section id="university">
      <div className="container">
        <div className="row align-items-center">
          <div className="column-lg-3">
            <p className="partner">500+</p>
            <p>Universities worldwide that partner with us.</p>
          </div>
          <div className="column-lg-9">
            <div className="univercities">
              <div className="university-item">A-University</div>
              <div className="university-item">B-University</div>
              <div className="university-item">C-University</div>
              <div className="university-item">D-University</div>
              <div className="university-item">E-University</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default University;
