import { useState } from "react";

const useToDoList = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodoList = (data) => {
    const toDoObject = { todo: data, done: false, id: Date.now() };
    setTodoList([...todoList, toDoObject]);
  };

  const deleteTodoList = (id) => {
    const result = todoList.filter((todo) => todo.id !== id);
    setTodoList(result);
  };

  const changeTodoList = (id) => {
    const newToDoList = [...todoList];
    newToDoList.forEach((todo) => {
      if (todo.id === id) {
        return todo.done === false ? (todo.done = true) : (todo.done = false);
      }
    });
    setTodoList(newToDoList);
  };

  return { todoList, addTodoList, deleteTodoList, changeTodoList };
};

export default useToDoList;
