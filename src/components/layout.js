import Helmet from 'react-helmet';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import 'normalize.css';
import '../global.css';

const PureLayout = ({ title, description, children }) => (
  <Fragment>
    <Helmet defaultTitle={title} titleTemplate={`%s - ${title}`}>
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </Fragment>
);

PureLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Layout = ({ children }) => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <PureLayout title={title} description={description}>
      {children}
    </PureLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
export { PureLayout };
