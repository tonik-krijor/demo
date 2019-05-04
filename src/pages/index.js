import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';

const IndexPageLayout = ({ title, image, articles }) => {
  console.log(articles);
  return (
    <Layout>
      <Header />
      <div>
        <h1>{title}</h1>
        <img src={image} style={{ maxWidth: '40rem' }} alt="" />
      </div>
    </Layout>
  );
};

IndexPageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape({ date: PropTypes.string, html: PropTypes.string }))
    .isRequired,
};

const IndexPage = () => {
  const {
    page: {
      childMarkdownRemark: {
        frontmatter: { title, image },
      },
    },
    articles: { edges },
  } = useStaticQuery(graphql`
    {
      page: file(sourceInstanceName: { eq: "pages" }, relativePath: { eq: "index.md" }) {
        childMarkdownRemark {
          frontmatter {
            title
            image
          }
        }
      }
      articles: allMarkdownRemark(
        filter: { fields: { sourceInstanceName: { eq: "articles" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              date
            }
            html
          }
        }
      }
    }
  `);

  const articles = edges.map(({ node }) => ({ date: node.frontmatter.date, html: node.html }));

  return <IndexPageLayout title={title} image={image} articles={articles} />;
};

export default IndexPage;
export { IndexPageLayout };
