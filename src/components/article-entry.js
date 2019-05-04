import React from 'react';
import PropTypes from 'prop-types';

export default function ArticleEntry({
  title, date, intro, image, imageAlt,
}) {
  return (
    <div>
      <img src={image} alt={imageAlt} />
      <span>{date}</span>
      <h3>{title}</h3>
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
};
