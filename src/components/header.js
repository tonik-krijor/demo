import React from 'react';

import headerStyles from './header.module.css';

export default function Header() {
  return (
    <div className={headerStyles.siteHeader}>
      <span className={headerStyles.siteTitle}>Hello!</span>
    </div>
  );
}
