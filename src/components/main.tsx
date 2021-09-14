import React from 'react';
import Education from './education';
import Works from './works';
import Projects from './projects';

const Main = () => {
  return (
    <main className="content">
      <section className="section">
        <h2 className="section-title">About me</h2>
        <p>
          I have been programming since 2001 and I have worked on projects in
          most programming languages: VB, C++, C#, Java, PHP, JavaScript, and
          Ruby.
        </p>
        <p>
          More than 15 years in the world of software development have helped me
          gain a wide range of knowledge and skills for developing web, desktop,
          and mobile applications.
        </p>
      </section>
      <section className="section">
        <h2 className="section-title">Work</h2>
        <Works />
      </section>
      <section className="section">
        <h2 className="section-title">Projects</h2>
        <Projects />
      </section>
      <section className="section">
        <h2 className="section-title">Education</h2>
        <Education />
      </section>
    </main>
  );
};

export default Main;
