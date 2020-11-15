import React from 'react';

import works from '../../content/work.json';

const Works = () => {
  return (
    <div className="history">
      {works.map(work => (
        <div className="history-item">
          <div className="history-date">
            <div className="title">{work.date}</div>
          </div>
          <div className="history-content">
            <h3 className="history-position">{work.position}</h3>
            <h4 className="history-employer">{work.employer}</h4>
            <div className="history-responsibility">{work.responsibility}</div>
            {work.technology && (
              <div className="history-technology">{work.technology}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;
