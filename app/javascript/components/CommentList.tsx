import React from "react"
import Comment from './Comment.tsx'

class CommentList extends React.Component {
  
  render () {
    // commentNodes内でthis参照ができないので代入
    const viewCom = () => this.props.viewCom()
    const commentNodes = this.props.data.map(function(comment, index) {
      return (
        <Comment viewCom={() => viewCom()} name={comment.name} id={index+1} post_date_time={comment.post_date_time} key={comment.id}>
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
