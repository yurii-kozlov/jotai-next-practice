import { ShapeAtom } from "@/types/atoms";
import { Atom, atom } from "jotai";
import { saveHistoryAtom } from "./history";

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

export const colorAtom = atom(
  (get) => {
    const selectedShapeAtom = get(selectedShapeAtomAtom);

    if (selectedShapeAtom) {
      return get(selectedShapeAtom).color || '';
    }

    return null;
  },
  (get, set, color: string) => {
    const selectedShapeAtom = get(selectedShapeAtomAtom);

    if (selectedShapeAtom) {
      set(saveHistoryAtom)
      set(selectedShapeAtom, (prevValue) => ({
        ...prevValue,
        color
      }));
    }
  }
);

export const selectedAtom = atom((get) => get(selectedShapeAtomAtom));

export const unselectAtom = atom(
  null,
  (_get, set) => {
    set(selectedShapeAtomAtom, null)
  }
);
