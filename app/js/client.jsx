var React = require('react');

var CommentBox = require('./components/CommentBox.jsx');

React.render (
  <CommentBox url="comments" pollInterval={2000} />,
  document.getElementById('content')
);
