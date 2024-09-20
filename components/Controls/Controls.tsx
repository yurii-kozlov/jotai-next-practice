'use client'

import { useAtom } from "jotai";
import { colorAtom } from "@/store/selectedShapeAtom";
import { colors } from "@/constants/colors";

export const Controls = () => {
  const [currentColor, setColor] = useAtom(colorAtom);

  return (
    <div>
      {colors.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setColor(value)}
          disabled={currentColor === null || currentColor === value}
        >
          {label}
        </button>
      ))}
    </div>
  );
};