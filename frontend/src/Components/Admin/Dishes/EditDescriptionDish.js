import { useLayoutEffect, useRef, useState } from "react";

const EditDescriptionDish = (props) => {
  const { dish, description, icon: Icon, setAction, editDescription } = props;
  const [value, setValue] = useState(description);
  const textareaRef = useRef();

  const handleInput = () => {
    setValue(textareaRef.current.value);
    autoResize();
  };

  const autoResize = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  const changeDescriptionDish = (dish) => {
    return { ...dish, description: value };
  };

  const handleClick = () => {
    const dishModified = changeDescriptionDish(dish);
    editDescription(dishModified);
    setAction(false);
  };

  useLayoutEffect(() => {
    autoResize();
  }, []);

  return (
    <>
      <span className="edit-text">
        <div className="header-textarea">Edit</div>
        <textarea ref={textareaRef} onInput={handleInput}>
          {value}
        </textarea>
      </span>
      <span className="icon edited" onClick={handleClick}>
        {Icon}
      </span>
    </>
  );
};

export default EditDescriptionDish;
