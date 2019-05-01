module.exports = {
  siteMetadata: {
    title: `Demo Site`
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'content'
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`
  ]
};
