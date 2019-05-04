import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import headerStyles from './header.module.css';

export default function Header() {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={headerStyles.siteHeader}>
      <Link to="/">
        <span className={headerStyles.siteTitle}>{title}</span>
      </Link>
    </div>
  );
}
