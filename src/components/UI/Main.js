import styles from "./Main.module.css";

function Main(props) {
  let mainClassName = styles.main;

  if (!props.isLoading && !props.isError && props.choiceIsOver) {
    mainClassName = `${styles.main} ${styles.news}`;
  }

  if (!props.isLoading && !props.isError && !props.choiceIsOver) {
    mainClassName = `${styles.main} ${styles.options}`;
  }

  return <main className={mainClassName}>{props.children}</main>;
}

export default Main;
