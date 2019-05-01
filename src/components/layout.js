import Helmet from 'react-helmet';
import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import 'normalize.css';
import '../global.css';

export default function Layout({ children }) {
  const {
    site: {
      siteMetadata: { title, description }
    }
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
}
