import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function ArticleEntry({
  title, date, intro, image, imageAlt, slug,
}) {
  return (
    <div>
      <img src={image} alt={imageAlt} />
      <span>{date}</span>
      <Link to={`articles/${slug}`}>
        <h3>{title}</h3>
      </Link>
      <p>{intro}</p>
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
