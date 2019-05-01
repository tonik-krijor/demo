import React from 'react';
import { graphql } from 'gatsby';

function IndexPage({
  data: {
    file: {
      childMarkdownRemark: {
        frontmatter: { title },
        html
      }
    }
  }
}) {
  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default IndexPage;

export const query = graphql`
  {
    file(relativePath: { eq: "pages/index.md" }) {
      childMarkdownRemark {
        frontmatter {
          title
        }
        html
      }
    }
  }
`;
