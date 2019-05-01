import React from 'react';
import { IndexPageLayout } from '../../pages/index';

export default function IndexPagePreview({ entry }) {
  const data = entry.getIn(['data']).toJS();
  return <IndexPageLayout image={data.image} title={data.title} />;
}
