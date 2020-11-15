import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';

import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import Main from './main';

export type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          slogan
        }
      }
    }
  `);

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title}
        siteSlogan={data.site.siteMetadata?.slogan}
      />
      <Container fluid className="layout">
        <Row>
          <Col md={4} className="sidebar-col">
            <Sidebar />
          </Col>
          <Col className="main-col">
            <Main />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
