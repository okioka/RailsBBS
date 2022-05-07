import React from 'react'
import axios from 'axios'
import CommentList from './CommentList.tsx'
import CommentForm from './CommentForm.tsx'

// コメントボックス
class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 投稿
      posts: [],
    };
    this.viewCom()
  }
  // 投稿を取得しstateにsetする
  viewCom() {
    const url = "comments/show"
    axios.get(url).then(res => {
      const posts = res.data
      this.setState({posts: posts})
    }).catch(error => {
      alert("投稿の表示ができません")
      console.log("投稿表示NG")
      console.log(error)
    })
  }
  render() {
    // コメントリストにデータを渡して表示
    return (
      <React.Fragment>
        <div>
          <CommentList viewCom={() => this.viewCom()} data={this.state.posts} />
          <CommentForm viewCom={() => this.viewCom()} />
        </div>
      </React.Fragment>
    )
  }
}

export default CommentBox