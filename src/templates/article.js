import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';

const ArticleTemplateLayout = ({ date, html }) => (
  <Layout>
    <Header />
    <div>
      <span>
        Published:
        {date}
      </span>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </Layout>
);

const ArticleTemplate = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return <ArticleTemplateLayout date={frontmatter.date} html={html} />;
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
