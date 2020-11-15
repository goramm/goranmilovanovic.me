import React from 'react';
import Logo from './logo';

import content from '../../content/sidebar.json';

const Sidebar: React.FC = () => (
  <aside className="sidebar">
    <div className="logo">
      <Logo />
    </div>
    <div className="section">
      <h3 className="section-title">Personal</h3>
      <ul className="section-list">
        {content.personal.map((data, index) => (
          <li key={`personal_${index}`}>
            <h5 className="label">{data.label}</h5>
            <span className="value">{data.value}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="section">
      <h3 className="section-title">Contact</h3>
      <ul className="section-list">
        {content.contact.map((data, index) => (
          <li key={`contact_${index}`}>
            <h5 className="label">{data.label}</h5>
            {data.link ? (
              <span className="value">
                <a href={data.link} target="blank">
                  {data.value}
                </a>
              </span>
            ) : (
              <span className="value">{data.value}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
    <div className="section">
      <h3 className="section-title">Links</h3>
      <ul className="section-list">
        {content.links.map((data, index) => (
          <li key={`link_${index}`}>
            <span className="value">
              <a href={data.link} target="blank">
                {data.name}
              </a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

export default Sidebar;
