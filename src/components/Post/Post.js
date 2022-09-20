import React from 'react';

// Styles
import './Post.styles.scss';

export default function Post(props) {
  return (
    <div className="post">
      <h2 className="post__title">{props.title}</h2>
      <p className="post__body">{props.body}</p>
    </div>
  );
}