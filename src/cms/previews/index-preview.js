import React from 'react';
import { IndexPageContent } from '../../pages/index';

export default function IndexPagePreview({ entry, widgetFor }) {
  const data = entry.getIn(['data']).toJS();

  console.log(data);

  if (data) {
    return (
      <IndexPageContent
        image={data.image}
        title={data.title}
        html={widgetFor('body')}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
}
