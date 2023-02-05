import { comments } from "../../../data/comments";
import Comment from "./Comment";

function Comments() {
  const CommentComponents = comments.map((info) => (
    <Comment key={info.id} {...info} />
  ));

  return (
    <section>
      <header>
        <h1 className="header-comments">Zadowoleni goście</h1>
      </header>
      <div className="section-comments">{CommentComponents}</div>
    </section>
  );
}

export default Comments;
