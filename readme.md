# json-to-react-element

[![](https://img.shields.io/travis/ramitos/json-to-react-element.svg)](https://travis-ci.org/ramitos/json-to-react-element) [![](https://img.shields.io/codeclimate/coverage/github/ramitos/json-to-react-element.svg)](https://codeclimate.com/github/ramitos/json-to-react-element/coverage) [![](https://img.shields.io/npm/v/json-to-react-element.svg)](https://www.npmjs.com/package/@ramitos/json-to-react-element) [![](https://img.shields.io/david/ramitos/json-to-react-element.svg)](https://david-dm.org/ramitos/json-to-react-element) [![](https://img.shields.io/codeclimate/github/ramitos/json-to-react-element.svg)](https://codeclimate.com/github/ramitos/json-to-react-element) [![](https://img.shields.io/npm/l/json-to-react-element.svg)](https://www.npmjs.com/package/@ramitos/json-to-react-element)

## install

## example

```js
var toElement = require('json-to-react-element');

var MyUl = function() {
  return toElement({
    children: [{
      name: 'li',
      props: {
        key: 'my-li'
      },
      content: 3
    }],
    name: 'ul',
    id: '.0'
  });
};
```

is equivalent to:

```jsx
var MyUl = function() {
  return (<ul>
    <li key='my-key'>3</li>
  </ul>);
};
```

## license

BSD-3-Clause
