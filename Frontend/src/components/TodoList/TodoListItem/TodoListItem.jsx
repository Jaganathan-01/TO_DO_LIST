import { useState } from "react";
import "./TodoListItem.css";

const TodoListItem = (props) => {
  const { item, onEdit, onDelete, index } = props;
  const { title, priority, _id } = item;
  const [isChecked, setChecked] = useState(false);

  return (
    <div className={`item-card ${priority}`}>
      {isChecked ? (
        <span
          className="material-symbols-outlined pointer"
          onClick={() => setChecked(false)}
        >
          select_check_box
        </span>
      ) : (
        <span className="checkbox pointer" onClick={() => setChecked(true)} />
      )}

      <div className={`card-title ${isChecked && "strike"}`}>{title}</div>

      <div className="badge">{priority}</div>
      <span
        class="material-symbols-outlined pointer edit-icon"
        onClick={() => onEdit(item)}
      >
        edit
      </span>
      <span
        className="material-symbols-outlined pointer"
        onClick={() => onDelete(_id)}
      >
        delete
      </span>
    </div>
  );
};

export default TodoListItem;
