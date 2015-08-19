var React = require('react');

// var CommentForm = require('./components/CommentForm.jsx');
// var Comment = require('./components/Comment.jsx');
// var CommentList = require('./components/CommentList.jsx');
var CommentBox = require('./components/CommentBox.jsx');

React.render (
  <CommentBox url="comments" pollInterval={2000} />,
  document.getElementById('content')
);
