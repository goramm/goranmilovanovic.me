import React from 'react';

import projects from '../../content/projects.json';

const Works = () => {
  return (
    <div className="history">
      {projects.map(project => (
        <div className="history-item">
          <div className="history-date">
            <div className="title">{project.date}</div>
          </div>
          <div className="history-content">
            <h3 className="history-position">{project.name}</h3>
            <h4 className="history-employer">{project.role}</h4>
            <div className="history-responsibility">{project.description}</div>
            {project.technology && (
              <div className="history-technology">{project.technology}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;
