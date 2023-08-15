import {Component} from 'react'

import './index.css'

import {v4 as uuidV4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {name: '', comment: '', initialCommentList: []}

  num = 0

  getDetails = event => {
    event.preventDefault()
    const {name, comment, initialCommentList} = this.state
    if (name !== '' && comment !== '') {
      const newComment = {
        id: uuidV4(),
        name,
        comment,
        isLike: false,
        num: this.num,
      }
      const newList = [...initialCommentList, newComment]
      this.setState({initialCommentList: newList, name: '', comment: ''})
      if (this.num === 6) {
        this.num = 0
      } else {
        this.num += 1
      }
    }
  }

  likeTheComment = id => {
    this.setState(prevState => ({
      initialCommentList: prevState.initialCommentList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLike: !eachItem.isLike}
        }
        return eachItem
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      initialCommentList: prevState.initialCommentList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, initialCommentList} = this.state

    const commentCount = initialCommentList.length
    return (
      <div className="app-div">
        <div className="top-section">
          <h1 className="heading">Comments</h1>
          <div className="main-div">
            <form onSubmit={this.getDetails} className="form">
              <p className="instruction">
                Say something about 4.0 Technologies
              </p>
              <input
                className="user"
                type="text"
                placeholder="Your Name"
                onChange={this.onNameChange}
                value={name}
              />
              <textarea
                className="comment"
                placeholder="Your Comment"
                onChange={this.onCommentChange}
                value={comment}
              />
              <button type="submit" className="btn">
                Add Comment
              </button>
            </form>

            <div className="img-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="main-img"
              />
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="comment-head">
            <p className="no-of-comments">{commentCount}</p>
            <p className="cm-heading">Comments</p>
          </div>
          <ul className="comments-section">
            {initialCommentList.map(eachItem => (
              <CommentItem
                item={eachItem}
                key={eachItem.id}
                cls={initialContainerBackgroundClassNames[eachItem.num]}
                likeTheComment={this.likeTheComment}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
