import Helmet from 'react-helmet';
import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function Metadata({ children }) {
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
