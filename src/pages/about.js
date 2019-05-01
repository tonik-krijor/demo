import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Metadata from '../components/metadata';
import Layout from '../components/layout';
import Header from '../components/header';

export function AboutPageContent({ title, stuff }) {
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div>
          <ul>
            {stuff.map(item => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default function AboutPage() {
  const {
    file: {
      childMarkdownRemark: {
        frontmatter: { title, stuff }
      }
    }
  } = useStaticQuery(graphql`
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
  `);

  return (
    <Metadata>
      <Header />
      <AboutPageContent title={title} stuff={stuff} />
    </Metadata>
  );
}
