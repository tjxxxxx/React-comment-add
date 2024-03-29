import React, { Component } from 'react';
import propTypes from 'prop-types';
export default class CommentItem extends Component {
  static propTypes = {
    comment: propTypes.object.isRequired,
    deleteComment: propTypes.func.isRequired,
    index: propTypes.number.isRequired
  };
  handleClick = () => {
    const { comment, deleteComment, index } = this.props;
    if (window.confirm(`Sure to delete${comment.username}comment`)) {
      deleteComment(index);
    }
  };
  render() {
    const { comment } = this.props;
    return (
      <li className='list-group-item'>
        <div className='handle'>
          <button
            type='button'
            className='btn btn-primary'
            onClick={this.handleClick}
          >
            Delete
          </button>
        </div>
        <p className='user'>
          <span>{comment.username}</span>
          <span>Speak:</span>
        </p>
        <p className='centence'>{comment.content}</p>
      </li>
    );
  }
}
