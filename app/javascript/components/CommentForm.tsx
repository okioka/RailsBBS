import React from "react"
import axios from 'axios'

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // 投稿
      name: '',
      comment: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }

  // 投稿処理
  post(e) {
    const url       = "comments/create";
    const name      = this.state.name
    const comment   = this.state.comment
    const data      = {name: name, comment: comment}
    // 入力チェック
    if (name    === "" || name    === null ||
        comment === "" || comment === null) {
      alert("未入力の項目があります")
      return false
    }
    // 投稿が完了したら投稿フォームを初期化する
    this.setState({name: '', comment: ''})
    // 投稿内容を登録
    axios.post(url, data).then(res => {
      alert("コメントの投稿に成功しました")
      this.props.viewCom()
    })
    .catch(error => {
      alert("コメントの投稿に失敗しました")
      console.log("新規投稿NG")
      console.log(error)
    });
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render () {
    return (
      <React.Fragment>
        <div>
          <h2>投稿フォーム</h2>
          <p><input type="text" id="name" name="name" placeholder="名前" value={this.state.name} onChange={this.handleChange}/></p>
          <p><textarea id="comment" name="comment" cols="60" rows="15" maxLength="80" wrap="hard" placeholder="本文" value={this.state.comment} onChange={this.handleChange}/></p>
          <p><button className="btn" onClick={this.post.bind(this)}>投稿</button></p>
        </div>
      </React.Fragment>
    );
  }
}

export default CommentForm
