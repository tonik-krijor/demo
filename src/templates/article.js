/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Header from '../components/header';

import style from './article.module.css';

const ArticleTemplateLayout = ({ date, html }) => (
  <Layout>
    <Header />
    <div className={style.container}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <span>
        Published:
        {` ${date}`}
      </span>
    </div>
  </Layout>
);

ArticleTemplateLayout.propTypes = {
  date: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

const ArticleTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return <ArticleTemplateLayout date={frontmatter.date} html={html} />;
};

ArticleTemplate.propTypes = {
  data: PropTypes.shape({ frontmatter: PropTypes.shape({ date: PropTypes.string }) }).isRequired,
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default ArticleTemplate;
export { ArticleTemplateLayout };
