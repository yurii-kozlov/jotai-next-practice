import { Point, Shape } from "@/types/atoms";
import { atom, PrimitiveAtom } from "jotai";
import { createShapeAtom } from "./shape/shape";

export const shapeAtomsAtom = atom<PrimitiveAtom<Shape>[]>([]);

export const addShapeAtom = atom(
  null,
  (_get, set, value: readonly Point[]) => {
    const shapeAtom = createShapeAtom(value);

    set(shapeAtomsAtom, (prevValue) => [
      ...prevValue,
      shapeAtom
    ]);
  }
)