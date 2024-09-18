'use client'

import { useAtom } from "jotai";
import { countAtom } from "@/store/count";

export const Counter = () => {
  const [count, setCount ] = useAtom<number>(countAtom)

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        +1
      </button>
    </div>
  );
};