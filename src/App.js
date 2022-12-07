import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "./components/Skeleton";
import styles from "./style/App.module.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    const localToDoList = localStorage.getItem("todo");
    if (localToDoList) {
      setToDoList(JSON.parse(localToDoList));
    }
    setTimeout(() => setLoding(false), 2000);
  }, []);

  const reLocal = (list) => {
    localStorage.setItem("todo", JSON.stringify(list));
  };

  const handleWrite = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    const copyTodo = [...toDoList];
    const toDoObject = { toDo, done: false, id: Date.now() };
    copyTodo.push(toDoObject);
    setToDoList((currentArray) => [toDoObject, ...currentArray]);
    setToDo("");
    console.log(toDoList);
    reLocal(copyTodo);
  };

  const handleTodo = (event) => setToDo(event.target.value);

  const handleDone = (id) => {
    const newToDoList = [...toDoList];
    newToDoList.forEach((todo) => {
      if (todo.id === id) {
        return todo.done === false ? (todo.done = true) : (todo.done = false);
      }
    });
    setToDoList(newToDoList);
    reLocal(newToDoList);
  };

  const handleToDoDelete = (id) => {
    const newToDoList = [...toDoList];
    const result = newToDoList.filter((todo) => todo.id !== id);
    setToDoList(result);
    reLocal(result);
  };

  return loding ? (
    <Skeleton />
  ) : (
    <div className={styles.app}>
      <div className={styles.doing}>
        <h1 className={styles.title}>할일</h1>
        <ul className={styles.ul}>
          {toDoList.map((todo, index) =>
            todo.done === false ? (
              <li
                key={index}
                onClick={() => handleDone(todo.id)}
                className={styles.todolist}
              >
                <span>{todo.toDo}</span>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleToDoDelete(todo.id)}
                />
              </li>
            ) : null
          )}
        </ul>
      </div>
      <div className={styles.doing}>
        <h1 className={styles.title}> 완료된 일</h1>
        <ul className={styles.ul}>
          {toDoList.map((todo, index) =>
            todo.done === true ? (
              <li
                key={index}
                className={styles.todolist}
                onClick={() => handleDone(todo.id)}
              >
                <span>{todo.toDo}</span>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleToDoDelete(todo.id)}
                />
              </li>
            ) : null
          )}
        </ul>
      </div>
      <div className={styles.write}>
        <form onSubmit={handleWrite} className={styles.write_form}>
          <input
            type="text"
            placeholder="할일을 작성하세요"
            onChange={handleTodo}
            value={toDo}
            className={styles.write_input}
          />
          <button className={styles.write_btn}>완료</button>
        </form>
      </div>
    </div>
  );
}

export default App;
