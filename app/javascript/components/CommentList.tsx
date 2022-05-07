import React from "react"
import Comment from './Comment.tsx'

class CommentList extends React.Component {
  render () {
    const commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment viewCom={() => this.props.viewCom()} name={comment.name} id={comment.id} post_date_time={comment.post_date_time} key={comment.id}>
          {comment.comment}
        </Comment>
      )
    })
    return (
      <React.Fragment>
        <div className="commentList">
          {commentNodes}
        </div>
      </React.Fragment>
    )
  }
}

export default CommentList
