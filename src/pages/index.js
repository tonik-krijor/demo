import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export function IndexPageContent({ title, image }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} style={{ maxWidth: '40rem' }} />
    </div>
  );
}

export default function IndexPage() {
  const {
    file: {
      childMarkdownRemark: {
        frontmatter: { title, image }
      }
    }
  } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "pages/index.md" }) {
        childMarkdownRemark {
          frontmatter {
            title
            image
          }
        }
      }
    }
  `);

  return <IndexPageContent title={title} image={image} />;
}
