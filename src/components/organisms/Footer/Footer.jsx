import React from "react";

import "./Footer.scss";



const Footer = () => {
  return (<footer className="o-footer">
    <section className="o-footer__section">
      <header>About the project</header>
      <p>Application that uses the marvel API to list comics. This app was build to be presented as final project in <span>React UI Bootcamp sponsored by Globant.</span></p>
      <div className="o-footer__links">
        <article className="o-footer__link">
          <img src={`${process.env.PUBLIC_URL}/img/github-logo.svg`} title="Go to Gitlab" alt="Github logo"/>
          <a href="https://github.com/Alula96/marvel-app" target="_blank" rel="noreferrer">Project in Github</a>
        </article>
      </div>
    </section>
    <section className="o-footer__section">
      <header>About the author</header>
      <p>
        Hello! My name is Maria and I am a semi-senior frontend developer. <br/>
        I have almost three years of development experience, two of them in the frontend role. <br/>
        I really enjoy building great designs, I always do my best and use the best practices.
      </p>
      <div className="o-footer__links">
        <article className="o-footer__link">
          <img src={`${process.env.PUBLIC_URL}/img/github-logo.svg`} title="Go to Gitlab" alt="Github logo"/>
          <a href="https://github.com/Alula96" target="_blank" rel="noreferrer">Author in Github</a>
        </article>
        <article className="o-footer__link">
          <img src={`${process.env.PUBLIC_URL}/img/linkedin-logo.svg`} title="Go to Linkedin" alt="Linkedin logo"/>
          <a href="https://www.linkedin.com/in/mariapaularoes/" target="_blank" rel="noreferrer">Linkedin profile</a>
        </article>
      </div>
    </section>
  </footer>);
};

export default Footer;