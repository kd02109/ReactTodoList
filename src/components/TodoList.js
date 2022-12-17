import { useState } from "react";
import styles from "../style/App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoList = ({ todoList, context }) => {
  const [todolist, setTodo] = useState(todoList);
  console.log(todolist);
  const reLocal = (list) => {
    localStorage.setItem("todo", JSON.stringify(list));
  };

  const handleDone = (id) => {
    const newToDoList = [...todolist];
    newToDoList.forEach((todo) => {
      if (todo.id === id) {
        return todo.done === false ? (todo.done = true) : (todo.done = false);
      }
    });
    setTodo(newToDoList);
    reLocal(newToDoList);
  };

  const handleToDoDelete = (id) => {
    const newToDoList = [...todolist];
    const result = newToDoList.filter((todo) => todo.id !== id);
    setTodo(result);
    reLocal(result);
  };

  if (context === "완료") {
    return (
      <ul className={styles.ul}>
        {todolist.map((todo, index) =>
          todo.done === true ? (
            <li key={index} className={styles.todolist}>
              <span className={styles.sapn} onClick={() => handleDone(todo.id)}>
                {todo.toDo}
              </span>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleToDoDelete(todo.id)}
              />
            </li>
          ) : null
        )}
      </ul>
    );
  } else {
    return (
      <ul className={styles.ul}>
        {todolist.map((todo, index) =>
          todo.done === false ? (
            <li key={index} className={styles.todolist}>
              <span className={styles.sapn} onClick={() => handleDone(todo.id)}>
                {todo.toDo}
              </span>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleToDoDelete(todo.id)}
              />
            </li>
          ) : null
        )}
      </ul>
    );
  }
};

export default TodoList;
