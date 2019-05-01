import React from 'react';
import { graphql } from 'gatsby';

export default ({
  data: {
    file: {
      childMarkdownRemark: {
        frontmatter: { title, stuff }
      }
    }
  }
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{stuff}</div>
    </div>
  );
};

export const query = graphql`
  {
    file(relativePath: { eq: "pages/about.md" }) {
      childMarkdownRemark {
        frontmatter {
          title
          stuff
        }
      }
    }
  }
`;
