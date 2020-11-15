import React from 'react';

import educations from '../../content/education.json';

const Education = () => {
  return (
    <div className="history education">
      {educations.map(data => (
        <div className="history-item">
          <div className="history-date">
            <div className="title">{data.date}</div>
          </div>
          <div className="history-content">
            <h3 className="history-position">{data.institution}</h3>
            <h4 className="history-employer">{data.country}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
