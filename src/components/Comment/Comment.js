import React from 'react';

// Styles
import './Comment.styles.scss';

export default function Comment(props) {
  return (
    <div className="comment">
      <div className='comment__user'>
        <h3 className="comment__user__name">{props.name}</h3>
        <span className="comment__user__email">{props.email}</span>
      </div>
      <p className="comment__body">{props.body}</p>
    </div>
  );
}