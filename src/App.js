import { useState } from "react";
import { useEffect } from "react";

//css
import styles from "./style/App.module.css";

//components
import Skeleton from "./components/Skeleton";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";

//hooks
import useToDoList from "./hook/useToDoList";
import WriteTodo from "./components/WriteTodo";

function App() {
  const { todoList, addTodoList, deleteTodoList, changeTodoList } =
    useToDoList();
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    //임으로 로딩시간 설정
    setTimeout(() => setLoding(false), 2000);
  }, []);

  return loding ? (
    <Skeleton />
  ) : (
    <div className={`${styles.app}`}>
      <TodoList
        todoList={todoList}
        deleteTodoList={deleteTodoList}
        addTodoList={addTodoList}
        changeTodoList={changeTodoList}
      />
      <DoneList
        todoList={todoList}
        deleteTodoList={deleteTodoList}
        addTodoList={addTodoList}
        changeTodoList={changeTodoList}
      />
      <WriteTodo handleInput={addTodoList} />
    </div>
  );
}

export default App;
