// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {item, cls, likeTheComment, deleteComment} = props
  const {id, name, comment, isLike} = item

  const getLiked = () => {
    likeTheComment(id)
  }

  const getDelete = () => {
    deleteComment(id)
  }

  const clsForLike = isLike ? 'getColor' : ''

  return (
    <li className="list">
      <div className="matter-div">
        <p className={`logo ${cls}`}>{name[0]}</p>
        <div className="content-div">
          <div className="inner-div">
            <p className="name">{name}</p>
            <p className="time">{formatDistanceToNow(new Date())}</p>
          </div>
          <p className="cm-main">{comment}</p>
        </div>
      </div>
      <div className="btm-div">
        <div className="btm-in">
          {!isLike ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
              className="img-styles"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              alt="liked"
              className="img-styles"
            />
          )}
          <button
            type="button"
            className={`like-btn ${clsForLike}`}
            onClick={getLiked}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          className="del-btn"
          onClick={getDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
