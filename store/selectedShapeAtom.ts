import { ShapeAtom } from "@/types/atoms";
import { Atom, atom } from "jotai";

const selectedShapeAtomAtom = atom<ShapeAtom | null>(null);

export const selectAtom = atom(
  null,
  (_get, set, shapeAtom: ShapeAtom) => {
    set(selectedShapeAtomAtom, shapeAtom);
  }
);

// This is an example of a derived atom
// Or a computed property in Redux or MobX
export const selectedAtomCreator = (shapeAtom: ShapeAtom): Atom<boolean> => {
  const selectedAtom = atom((get) => shapeAtom === get(selectedShapeAtomAtom));

  return selectedAtom;
}
