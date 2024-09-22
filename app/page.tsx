import { Provider } from "jotai";
import { SvgRoot } from "@/components/SvgRoot";
import { Counter } from "@/components/Counter";
import { Controls } from "@/components/Controls";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Hello, let us pratice jetai</h1>
      <Counter />
      <div>
      {/* Jotai exposes a Provider component that allows you to wrap any part of your application 
      that you want to isolate state to. */}
        <Provider>
          <SvgRoot />
          <Controls />
        </Provider>
        <hr />
        <Provider>
          <SvgRoot />
          <Controls />
        </Provider>
      </div>
    </div>
  );
}
