'use client'

import { useAtom } from "jotai";
import { colorAtom } from "@/store/selectedShapeAtom";
import { colors } from "@/constants/colors";
import { deleteSelectedShapeAtom } from "@/store/shapeAtoms";
import { undoAtom } from "@/store/history";

export const Controls = () => {
  const [currentColor, setColor] = useAtom(colorAtom);
  const [doesSelectedAtomExist, deleteChosenShapeAtom] = useAtom(deleteSelectedShapeAtom);
  const [hasHistory, undo] = useAtom(undoAtom);

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
      <button disabled={!doesSelectedAtomExist} onClick={deleteChosenShapeAtom}>Delete</button>
      <hr />
      <button disabled={!hasHistory} onClick={undo}>Undo</button>
    </div>
  );
};