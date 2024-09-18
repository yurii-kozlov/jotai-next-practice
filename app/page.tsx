import { SvgRoot } from "@/components/SvgRoot";
import styles from "./page.module.scss";
import { Counter } from "@/components/Counter";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Hello, let us pratice jetai</h1>
      <Counter />
      <div>
        <SvgRoot />
      </div>
    </div>
  );
}
