import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import headerStyles from './header.module.css';

export default function Header() {
  const {
    site: {
      siteMetadata: { title }
    }
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
      <span className={headerStyles.siteTitle}>{title}</span>
    </div>
  );
}
