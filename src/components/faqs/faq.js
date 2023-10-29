import React, { useState } from "react";

function Faq() {
  const [IdSet, setIdSet] = useState("");

  const toggleAccordion = (e) => {
    setIdSet(e.target.id);
  };
  return (
    <section id="faq">
      <div className="container">
        <h2 className="main-heading text-center">FAQs</h2>
        <div className="row">
          <div className="column-6">
            <div
              id="1"
              className={`accordionItem ${IdSet == 1 ? "is-open" : ""}`}
              onClick={toggleAccordion}
            >
              <h2 className="accordionTitle">Why is this course the best ?</h2>
              <div className="accordionContent">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  cupiditate nesciunt quo. Minima a qui inventore, iure neque
                  earum, quas quae, atque dignissimos modi nobis laboriosam
                  quod. Cumque, voluptatum distinctio.
                </p>
              </div>
            </div>
          </div>
          <div className="column-6">
            <div
              id="2"
              className={`accordionItem ${IdSet == 2 ? "is-open" : ""}`}
              onClick={toggleAccordion}
            >
              <h2 className="accordionTitle">Why is this course famous ?</h2>
              <div className="accordionContent">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Distinctio tenetur magnam saepe vel fugiat labore aut. Tempora
                  voluptas ab numquam reiciendis blanditiis eligendi, qui animi
                  sunt ullam ipsam nobis dicta.
                </p>
              </div>
            </div>
          </div>
          <div className="column-6">
            <div
              id="3"
              className={`accordionItem ${IdSet == 3 ? "is-open" : ""}`}
              onClick={toggleAccordion}
            >
              <h2 className="accordionTitle">How to enroll ?</h2>
              <div className="accordionContent">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Distinctio tenetur magnam saepe vel fugiat labore aut. Tempora
                  voluptas ab numquam reiciendis blanditiis eligendi, qui animi
                  sunt ullam ipsam nobis dicta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
