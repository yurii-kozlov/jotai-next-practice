'use client'

import { useAtom } from "jotai";
import { colorAtom } from "@/store/selectedShapeAtom";
import { colors } from "@/constants/colors";
import { deleteSelectedShapeAtom } from "@/store/shapeAtoms";

export const Controls = () => {
  const [currentColor, setColor] = useAtom(colorAtom);
  const [doesSelectedAtomExist, deleteShapeAtom] = useAtom(deleteSelectedShapeAtom);

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
      <hr />
      <button disabled={!doesSelectedAtomExist} onClick={deleteShapeAtom}>Delete</button>
    </div>
  );
};