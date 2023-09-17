import { TodosContainer } from "./components/TodosContainer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.baseContainer}>
      <div className={styles.appLogo}>todos</div>
      <TodosContainer />
    </main>
  );
}
