import { useState, useEffect, useContext, createContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "./components/Skeleton";
import styles from "./style/App.module.css";

function App() {
  // imput
  const [toDo, setToDo] = useState("");
  // todo 저장
  const [toDoList, setToDoList] = useState([]);
  // loading 창
  const [loding, setLoding] = useState(true);

  //로컬 스토리지 불러오기
  useEffect(() => {
    const localToDoList = localStorage.getItem("todo");
    if (localToDoList) {
      setToDoList(JSON.parse(localToDoList));
    }
    //임으로 로딩시간 설정
    setTimeout(() => setLoding(false), 2000);
  }, []);

  // 로컬 스토리지 자료 갱신
  const reLocal = (list) => {
    localStorage.setItem("todo", JSON.stringify(list));
  };

  // TODOLIST 갱신
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

  // input
  const handleTodo = (event) => setToDo(event.target.value);

  // 완료 미정 교체
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

  // 삭제
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
              <li key={index} className={styles.todolist}>
                <span
                  className={styles.span}
                  onClick={() => handleDone(todo.id)}
                >
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
      </div>
      <div className={styles.doing}>
        <h1 className={styles.title}> 완료된 일</h1>
        <ul className={styles.ul}>
          {toDoList.map((todo, index) =>
            todo.done === true ? (
              <li key={index} className={styles.todolist}>
                <span
                  className={styles.sapn}
                  onClick={() => handleDone(todo.id)}
                >
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
