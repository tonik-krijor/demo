import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export function IndexPageContent({ title, image, html }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} style={{ maxWidth: '40rem' }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default function IndexPage() {
  const {
    file: {
      childMarkdownRemark: {
        frontmatter: { title, image },
        html
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
          html
        }
      }
    }
  `);

  return <IndexPageContent title={title} image={image} html={html} />;
}
