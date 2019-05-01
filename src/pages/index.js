import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';

export function IndexPageLayout({ title, image }) {
  return (
    <Layout>
      <Header />
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

  return <IndexPageLayout title={title} image={image} />;
}
