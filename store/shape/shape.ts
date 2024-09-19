import { atom } from "jotai";
import { Point } from "@/types/atoms";
import { Shape } from "@/types/atoms";
import { getPointsToPath } from "./helpers";

export const shapeAtom = atom<Shape>({ path: '' });

// write-only atom as well
/* export const addShapeAtom = atom(
  null,
  (_get, set, updatedValue: readonly Point[]) => {
    set(shapeAtom, { path: getPointsToPath(updatedValue)});
  }
); */

export const createShapeAtom = (points: readonly Point[]) => atom<Shape>({ path: getPointsToPath(points)});
