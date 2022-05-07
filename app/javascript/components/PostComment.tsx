import React from "react"

interface Props {
  id: number
  name: string
  postDateTime: Date
  comment: string
}

class PostComment extends React.Component<Props> {
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

  render () {
    return (
      <React.Fragment>
        <div>
          <h3>
            {this.props.id} . {this.props.name} . {this.dateFormat(this.props.postDateTime)}
            <button className="btn_small">削除</button>
          </h3>
          {this.props.comment}
        </div>
      </React.Fragment>
    );
  }
}

export default PostComment
