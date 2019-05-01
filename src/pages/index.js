import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Metadata from '../components/metadata';
import Layout from '../components/layout';

export function IndexPageContent({ title, image }) {
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <img src={image} style={{ maxWidth: '40rem' }} />
      </div>
    </Layout>
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

  return (
    <Metadata>
      <IndexPageContent title={title} image={image} />
    </Metadata>
  );
}
