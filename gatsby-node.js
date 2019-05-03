exports.onCreateNode = ({ node, actions, getNode }) => {
  // Adds fields to remark nodes from parent file nodes.
  if (node.internal.type === 'MarkdownRemark') {
    const { name, sourceInstanceName } = getNode(node.parent);
    const { createNodeField } = actions;

    // contentDir is the name of the directory inside 'content/'.
    createNodeField({
      node,
      name: 'sourceInstanceName',
      value: sourceInstanceName
    });

    // fileName is the name of the markdown file (without the extension).
    createNodeField({
      node,
      name: 'fileName',
      value: name
    });
  }
};
