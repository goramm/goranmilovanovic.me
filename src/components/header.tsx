import React from 'react';

interface IProps {
  siteTitle: string;
  siteSlogan: string;
}

const Header: React.FC<IProps> = ({ siteTitle, siteSlogan }) => (
  <header className="header">
    <h1 className="title">{siteTitle}</h1>
    <h4 className="subtitle">{siteSlogan}</h4>
  </header>
);

export default Header;
