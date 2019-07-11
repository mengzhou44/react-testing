import React from 'react';

import _ from 'lodash';

export default function CommentList(props) {
  function renderComment(comment) {
    return <li key={comment}>{comment}</li>;
  }

  return <div>{_.map(props.comments, renderComment)}</div>;
}
