const Comment = (props) => {
  const { imagePerson, name, comment, surname } = props;

  return (
    <div className="comment">
      <div className="image">
        <img src={imagePerson} alt={name} />
      </div>
      <div className="description">{comment}</div>
      <div className="author">
        <span>~</span>
        <span>{name} </span>
        <span>{surname}</span>
      </div>
    </div>
  );
};

export default Comment;
