exports.createPages = async ({ actions, graphql }) => {
  const queryResult = await graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { sourceInstanceName: { eq: "articles" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  const articleTemplate = `${__dirname}/src/templates/article.js`;
  const { createPage } = actions;
  const { edges } = queryResult.data.allMarkdownRemark;

  edges.forEach(({ node }) => {
    const { id, frontmatter } = node;
    const { slug } = frontmatter;
    createPage({
      path: `articles/${slug}`,
      component: articleTemplate,
      context: { id },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  // Adds sourceInstanceName for remark nodes.
  if (node.internal.type === 'MarkdownRemark') {
    const { sourceInstanceName } = getNode(node.parent);
    const { createNodeField } = actions;

    createNodeField({
      node,
      name: 'sourceInstanceName',
      value: sourceInstanceName,
    });
  }
};
