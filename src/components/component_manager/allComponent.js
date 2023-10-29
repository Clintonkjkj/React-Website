import React from "react";
import Course_Video from "../course_video/Course_Video";
import Courses from "../courses/courses";
import Coursescard from "../coursesCard/coursescard";
import Faq from "../faqs/faq";
import Footer from "../footer/footer";
import Header from "../header/Header";
import Project from "../Projects/Project";
import Banner from "../banner/banner";
import University from "../university/university";
function AllComponent() {
  return (
    <div>
      <Header />
      <Banner />
      <University />
      <Courses />
      <Coursescard />
      <Course_Video />
      <Project />
      <Faq />
      <Footer />
    </div>
  );
}

export default AllComponent;
