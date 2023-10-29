import React, { useState } from "react";

function Project() {
  const [Id, setId] = useState(1);
  let section_head = ["Section 1", "Section 2", "Section 3"];
  let para_data = [
    "WISP has been one of the most valuable aspects of my graduate studies. Their team is friendly, helpful, and extremely skilled at tutoring your writing assignments no matter what form your topic or reporting structure requires. After many years in the professional sphere, WISP helped build my confidence as a returning student -- without their help, I seriously may have left higher education",
    "The Writing Skills Improvement Program (WSIP) was established over 40 years ago in order to help writers improve their writing skills and achieve academic success.WISP has been one of the most valuable aspects of my graduate studies. Their team is friendly, helpful, and extremely skilled at tutoring your writing assignments no matter what form your topic or reporting structure requires. After many years in the professional sphere, WISP helped build my confidence as a returning student -- without their help, I seriously may have left higher education",
    "Check out our Writing Resources Page for tips, tricks and in-depth writing help. General, graduate and multi-lingual resources are available.WISP has been one of the most valuable aspects of my graduate studies. Their team is friendly, helpful, and extremely skilled at tutoring your writing assignments no matter what form your topic or reporting structure requires. After many years in the professional sphere, WISP helped build my confidence as a returning student -- without their help, I seriously may have left higher education",
  ];
  const [sect, setSect] = useState(section_head[0]);
  const [para, setPara] = useState(para_data[0]);
  const section = (
    <div className="section-card">
      <h2 className="accordionTitle section_style">{sect}</h2>
      <div className="accordionContent">
        <p>{para}</p>
      </div>
    </div>
  );
  return (
    <section>
      <div className="container">
        <h2 className="main-heading text-center">Projects</h2>
        <div className="tab text-center">
          <button
            className={`tablinks ${Id === 1 ? "tabActive" : ""}`}
            onClick={() => {
              setSect(section_head[0]);
              setId(1);
              setPara(para_data[0]);
            }}
          >
            Section 1
          </button>
          <button
            className={`tablinks ${Id === 2 ? "tabActive" : ""}`}
            onClick={() => {
              setSect(section_head[1]);
              setId(2);
              setPara(para_data[1]);
            }}
          >
            Section 2
          </button>
          <button
            className={`tablinks ${Id === 3 ? "tabActive" : ""}`}
            onClick={() => {
              setSect(section_head[2]);
              setId(3);
              setPara(para_data[2]);
            }}
          >
            Section 3
          </button>
        </div>
        <div className="row">
          <div className="section-pad">{section}</div>
        </div>
      </div>
    </section>
  );
}

export default Project;
