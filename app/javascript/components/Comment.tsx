import React from "react"
import axios from 'axios'

class Comment extends React.Component {
  dateFormat(inputDate) {
    const date = new Date(inputDate)
    return new Intl.DateTimeFormat("ja-jp", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  }

  // 投稿削除処理
  delete() {
    const url  = "comments/" + this.props.id
    const ret  = confirm("投稿を削除しますか？")
    // 確認ダイアログでいいえを選択した場合は処理を終了する
    if(ret === false) {
      return false;
    }
    // 投稿削除
    axios.delete(url).then(res => {
      alert("投稿の削除に成功しました")
      // TODO : 孫コンポーネントへの関数の受け渡しがうまくいかないので調査すること
      // this.props.viewCom()
    })
    .catch(error => {
      alert("投稿の削除に失敗しました")
      console.log("投稿削除NG")
      console.log(error)
    });
  }

  render () {
    // 投稿本文の改行コードを<br>タグに置き換える
    const newLineTexts = () => {
      if (typeof(this.props.children) === "string") {
        return this.props.children.split("\n").map((m,i) => <span key={i}>{m}<br/></span>)
      } else {
        return ""
      }
    }
    // ユーザー名とコメント表示
    return (
      <React.Fragment>
        <div>
          <h3>
            {this.props.id} . {this.props.name} . {this.dateFormat(this.props.post_date_time)}　
            <button className="btn_small}" onClick={this.delete.bind(this)}>削除</button>
          </h3>
          {newLineTexts()}
        </div>
      </React.Fragment>
    );
  }
}

export default Comment
