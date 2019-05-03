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
