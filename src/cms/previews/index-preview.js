import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageLayout } from '../../pages/index';

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  return <IndexPageLayout image={data.image} title={data.title} articles={[]} />;
};

IndexPagePreview.propTypes = {
  entry: PropTypes.func.isRequired,
};

export default IndexPagePreview;
