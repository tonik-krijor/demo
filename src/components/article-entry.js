import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import style from './article-entry.module.css';

export default function ArticleEntry({
  title, date, intro, image, imageAlt, slug,
}) {
  return (
    <div className={style.container}>
      <img className={style.image} src={image} alt={imageAlt} />
      <div className={style.textContainer}>
        <Link to={`/articles/${slug}`} className={style.titleLink}>
          <h3 className={style.title}>{title}</h3>
        </Link>
        <span className={style.publishDate}>{date}</span>
        <p className={style.intro}>{intro}</p>
      </div>
    </div>
  );
}

ArticleEntry.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
