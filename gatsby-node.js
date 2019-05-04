exports.createPages = async ({ actions, graphql }) => {
  const queryResult = await graphql(`
    {
      allMarkdownRemark(filter: { fields: { sourceInstanceName: { eq: "articles" } } }) {
        edges {
          node {
            id
            fields {
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
  if (node.internal.type === 'MarkdownRemark') {
    const { sourceInstanceName, name } = getNode(node.parent);
    const { createNodeField } = actions;

    // Adds sourceInstanceName field to remark node.
    createNodeField({
      node,
      name: 'sourceInstanceName',
      value: sourceInstanceName,
    });

    // Adds slug field to remark node.
    createNodeField({
      node,
      name: 'slug',
      value: name,
    });
  }
};
