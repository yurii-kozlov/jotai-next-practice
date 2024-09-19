import { Point, ShapeAtom } from "@/types/atoms";
import { atom } from "jotai";
import { createShapeAtom } from "./shape/shape";
import { selectAtom } from "./selectedShapeAtom";

export const shapeAtomsAtom = atom<ShapeAtom[]>([]);

export const addShapeAtom = atom(
  null,
  (_get, set, value: readonly Point[]) => {
    if (value.length < 2) {
      return;
    };

    const shapeAtom = createShapeAtom(value);

    set(shapeAtomsAtom, (prev) => [
      ...prev,
      shapeAtom
    ]);
    set(selectAtom, shapeAtom);
  }
)