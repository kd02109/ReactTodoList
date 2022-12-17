import styles from "./style/App.module.css";
import useWrite from "../hook/useWrite";

const WriteTodo = () => {
  const { write, handleInputChange, resetInput } = useWrite("");

  const editSpace = (write) => {
    return write.replace(/\s/g, "");
  };

  const handleWrite = (event) => {
    event.preventDefault();
    const editWrite = editSpace(write);
    if (editWrite === "") {
      return window.alert("공백만 작성하지 마세요!!");
    }
    resetInput();
  };

  return (
    <form onSubmit={handleWrite} className={styles.write_form}>
      <input
        type="text"
        placeholder="할일을 작성하세요"
        onChange={handleInputChange}
        value={write}
        className={styles.write_input}
      />
      <button className={styles.write_btn}>완료</button>
    </form>
  );
};

export default WriteTodo;
