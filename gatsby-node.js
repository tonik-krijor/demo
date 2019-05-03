exports.createPages = async ({ actions, graphql }) => {
  const queryResult = await graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { file: { sourceInstanceName: { eq: "articles" } } } }
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

  const { createPage } = actions;
  const articleTemplate = `${__dirname}/src/templates/article.js`;
  const edges = queryResult.data.allMarkdownRemark.edges;

  edges.forEach(({ node }) => {
    const { id, frontmatter } = node;
    const { slug } = frontmatter;
    createPage({
      path: slug,
      component: articleTemplate,
      context: { id }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  // Creates a field for the parent file in the remark node.
  if (node.internal.type === 'MarkdownRemark') {
    const parent = getNode(node.parent);
    const { createNodeField } = actions;

    createNodeField({
      node,
      name: 'file',
      value: parent
    });
  }
};
