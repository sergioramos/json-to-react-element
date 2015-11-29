var map = require('lodash.map');
var React = require('react');

var createChildren = function(node) {
  if (node.content) {
    return node.content;
  }

  return map(node.children, createElement);
};

var createElement = function(node) {
  if (!node || !node.name) {
    return false;
  }

  return React.createElement(node.name, node.props, createChildren(node));
};

module.exports = function(tree) {
  return createElement(tree);
};