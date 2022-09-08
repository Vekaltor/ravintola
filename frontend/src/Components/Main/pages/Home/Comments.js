import { comments } from "./DataHome";

function Comments() {
  return (
    <>
      <header>
        <h1 className="header-comments">Zadowoleni goście</h1>
      </header>
      <div className="section-comments">
        {comments.map((comment) => {
          return (
            <div key={comment.id} className="comment">
              <div className="image">
                <img src={comment.imagePerson} alt={comment.name} />
              </div>
              <div className="description">{comment.comment}</div>
              <div className="author">
                <span>~</span>
                <span>{comment.name} </span>
                <span>{comment.surname}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Comments;
