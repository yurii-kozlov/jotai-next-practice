import { atom } from "jotai";
import { Point } from "@/types/atoms";
import { ShapeAtomValue } from "@/types/atoms";
import { getPointsToPath } from "./helpers";

export const shapeAtom = atom<ShapeAtomValue>({ path: '' });

// write-only atom as well
/* export const addShapeAtom = atom(
  null,
  (_get, set, updatedValue: readonly Point[]) => {
    set(shapeAtom, { path: getPointsToPath(updatedValue)});
  }
); */

export const createShapeAtom = (
  points: readonly Point[]
) => atom({ path: getPointsToPath(points) });
