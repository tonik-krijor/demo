import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';
import ArticleEntry from '../components/article-entry';

import style from './index.module.css';

const IndexPageLayout = ({ title, image, articles }) => (
  <Layout>
    <Header />
    <div>
      <img className={style.image} src={image} alt="" />
      <div className={style.articles}>
        <h1>{title}</h1>
        {articles.map(a => (
          <ArticleEntry
            key={a.id}
            title={a.title}
            date={a.date}
            intro={a.intro}
            image={a.image}
            imageAlt={a.imageAlt}
            slug={a.slug}
          />
        ))}
      </div>
    </div>
  </Layout>
);

IndexPageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      intro: PropTypes.string,
      image: PropTypes.image,
      imageAlt: PropTypes.string,
      slug: PropTypes.string,
    }),
  ).isRequired,
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
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
              intro
              image
              imageAlt
            }
          }
        }
      }
    }
  `);

  const articles = edges.map(({ node: { id, fields, frontmatter } }) => ({
    id,
    title: frontmatter.title,
    date: frontmatter.date,
    intro: frontmatter.intro,
    image: frontmatter.image,
    imageAlt: frontmatter.imageAlt,
    slug: fields.slug,
  }));
  return <IndexPageLayout title={title} image={image} articles={articles} />;
};

export default IndexPage;
export { IndexPageLayout };
