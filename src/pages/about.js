import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from 'components/layout';
import Header from 'components/header';

import style from './about.module.css';

const AboutPageLayout = ({ title, stuff }) => (
  <Layout>
    <Header />
    <div className={style.container}>
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

AboutPageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  stuff: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const AboutPage = () => {
  const {
    file: {
      childMarkdownRemark: {
        frontmatter: { title, stuff },
      },
    },
  } = useStaticQuery(graphql`
    {
      file(sourceInstanceName: { eq: "pages" }, relativePath: { eq: "about.md" }) {
        childMarkdownRemark {
          frontmatter {
            title
            stuff
          }
        }
      }
    }
  `);

  return <AboutPageLayout title={title} stuff={stuff} />;
};

export { AboutPageLayout };
export default AboutPage;
