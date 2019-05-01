import React from 'react';
import { IndexPageContent } from '../../pages/index';

export default function IndexPagePreview({ entry }) {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <IndexPageContent image={data.image} title={data.title} />;
  } else {
    return <div>Loading...</div>;
  }
}
