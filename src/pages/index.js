import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';

const IndexPageLayout = ({ title, image }) => (
  <Layout>
    <Header />
    <div>
      <h1>{title}</h1>
      <img src={image} style={{ maxWidth: '40rem' }} alt="" />
    </div>
  </Layout>
);

IndexPageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const IndexPage = () => {
  const {
    file: {
      childMarkdownRemark: {
        frontmatter: { title, image },
      },
    },
  } = useStaticQuery(graphql`
    {
      file(sourceInstanceName: { eq: "pages" }, relativePath: { eq: "index.md" }) {
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
};

export default IndexPage;
export { IndexPageLayout };
