import styles from '../styles/PulsingDots.module.css'; 

const LoadingDots = () => {
  return (
    <div className={styles.loading}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default LoadingDots;
