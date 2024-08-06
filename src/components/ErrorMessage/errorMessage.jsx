import styles from "./ErrorMessage.module.css";

function ErrorMessage({ message }) {
  return <div className={styles.error}>Error: {message}</div>;
}

export default ErrorMessage;
