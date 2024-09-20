import { Point, ShapeAtom } from "@/types/atoms";
import { atom } from "jotai";
import { createShapeAtom } from "./shape/shape";
import { selectAtom, selectedAtom, unselectAtom } from "./selectedShapeAtom";

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
);

export const deleteSelectedShapeAtom = atom(
  (get) => {
    const doesSelectedAtomExist = !!get(selectedAtom);

    return doesSelectedAtomExist;
  },
  (get, set) => {
    const chosenAtom = get(selectedAtom);

    if (chosenAtom) {
      set(shapeAtomsAtom, (prevValue) => {
        return prevValue.filter((atom) => atom !== chosenAtom);
      })

      set(unselectAtom);
    }
  }
)
