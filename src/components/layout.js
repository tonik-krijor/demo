import Helmet from 'react-helmet';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import 'normalize.css';
import '../global.css';

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
    <Fragment>
      <Helmet defaultTitle={title} titleTemplate={`%s - ${title}`}>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
