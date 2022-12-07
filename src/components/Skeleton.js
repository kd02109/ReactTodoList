import styles from "../style/Skeleton.module.css";
import app from "../style/App.module.css";

function Skeleton() {
  return (
    <div className={app.app}>
      <div className={styles.box}>
        <div className={styles.skeleton_list_item}></div>
      </div>
      <div className={styles.box}>
        <div className={styles.skeleton_list_item}></div>
      </div>
      <div className={styles.box}>
        <div className={styles.skeleton_list_item2}></div>
      </div>
    </div>
  );
}

export default Skeleton;
