import React from "react"

class CommentForm extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <h2>投稿フォーム</h2>
          <p><input type="text" id="name" name="name" placeholder="名前"/></p>
          <p><textarea id="comment" name="comment" cols="60" rows="15" maxLength="80" wrap="hard" placeholder="本文"/></p>
          <p><button className="btn">投稿</button></p>
        </div>
      </React.Fragment>
    );
  }
}

export default CommentForm
