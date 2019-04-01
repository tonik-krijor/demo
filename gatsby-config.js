module.exports = {
  siteMetadata: {
    title: `Demo Site`
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'blog'
      }
    },
    `gatsby-plugin-netlify-cms`
  ]
};
