import React from 'react';
import { graphql } from 'gatsby';

export default ({
  data: {
    file: {
      childMarkdownRemark: {
        frontmatter: { title, image },
        html
      }
    }
  }
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} style={{ maxWidth: '40rem' }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export const query = graphql`
  {
    file(relativePath: { eq: "pages/index.md" }) {
      childMarkdownRemark {
        frontmatter {
          title
          image
        }
        html
      }
    }
  }
`;
