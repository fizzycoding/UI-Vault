import styles from "../styles/SquareLoading.module.css";
function SquareLoading() {
  return (
    <div className={styles.loadingSquares}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default SquareLoading;
