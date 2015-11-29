var map = require('lodash.map');
var React = require('react');

var createChildren = function(tree) {
  if (node.content) {
    return node.content;
  }

  return node.children.map(createElement, this);
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