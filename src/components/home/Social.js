import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.baeldung.com/linux/author/samuelnjugunakaranja/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-pen"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/samuel-karanja-207112181/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/samuelkaranja"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
