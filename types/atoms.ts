import { PrimitiveAtom } from "jotai";

export type Point = [number, number];

export interface Shape {
  path: string
};

export type ShapeAtom = PrimitiveAtom<Shape>
