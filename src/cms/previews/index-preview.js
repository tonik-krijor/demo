import React from 'react';
import { IndexPageContent } from '../../pages/index';

export default function IndexPagePreview({ entry, getAsset }) {
  const data = entry.getIn(['data']).toJS();

  console.log(data);

  if (data) {
    return (
      <IndexPageContent
        image={data.image}
        title={data.title}
        html="<div></div>"
      />
    );
  } else {
    return <div>Loading...</div>;
  }
}
