import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "../style/App.module.css";

const TodoItem = ({ index, deleteTodoList, id, data, changeTodoList }) => {
  const handleToDoDelete = (id) => {
    if (window.confirm("삭제를 진행하시겠습니까?")) {
      deleteTodoList(id);
    }
  };

  const handleTodolistState = (id) => {
    changeTodoList(id);
  };

  return (
    <li key={index} className={styles.todolist}>
      <span className={styles.span} onClick={() => handleTodolistState(id)}>
        {data}
      </span>
      <FontAwesomeIcon icon={faTrash} onClick={() => handleToDoDelete(id)} />
    </li>
  );
};

export default TodoItem;
