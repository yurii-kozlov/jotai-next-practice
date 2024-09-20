import { PrimitiveAtom } from "jotai";

export type Point = [number, number];

export interface ShapeAtomValue {
  path: string;
  color?: string;
};

export type ShapeAtom = PrimitiveAtom<ShapeAtomValue>
