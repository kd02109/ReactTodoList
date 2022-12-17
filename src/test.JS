<ul className={styles.ul}>
  {toDoList.map((todo, index) =>
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
</ul>;
