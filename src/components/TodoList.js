import styles from "../style/App.module.css";
import TodoItem from "./TodoItem";

const TodoList = ({
  todoList,
  deleteTodoList,
  addTodoList,
  changeTodoList,
}) => {
  return (
    <div className={styles.doing}>
      <h1 className={styles.title}>할일</h1>
      <ul className={styles.ul}>
        {todoList.map((todo, index) =>
          todo.done === false ? (
            <TodoItem
              index={index}
              data={todo.todo}
              deleteTodo={deleteTodoList}
              addTodoList={addTodoList}
              changeTodoList={changeTodoList}
              id={todo.id}
            />
          ) : null
        )}
      </ul>
    </div>
  );
};

export default TodoList;
