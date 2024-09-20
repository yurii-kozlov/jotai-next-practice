import { ShapeAtom, ShapeAtomValue } from "@/types/atoms";
import { atom, SetStateAction } from "jotai";
import { unselectAtom } from "./selectedShapeAtom";

const internalShapeAtomsAtom = atom<ShapeAtom[]>([]);

const historyAtom = atom<ShapeAtomValue[][]>([]);

export const saveHistoryAtom = atom(
  null,
  (get, set) => {
    const shapes = get(internalShapeAtomsAtom).map((shapeAtom) => get(shapeAtom));

    set(historyAtom, (prevValue) => [shapes, ...prevValue]);
  }
);

export const shapeAtomsAtom = atom(
  (get) => get(internalShapeAtomsAtom),
  (_get, set, update: SetStateAction<ShapeAtom[]>) => {
    set(saveHistoryAtom);
    set(internalShapeAtomsAtom, update);
  }
);

export const undoAtom = atom(
  (get) => {
    const hasHistory = get(historyAtom).length > 0;

    return hasHistory;
  },
  (get, set) => {
    const history = get(historyAtom);

    if (history.length > 0) {
      const [shapes, ...rest] = history;

      set(internalShapeAtomsAtom, (prevValue) => {
        return shapes.map((shape, index) => {
          return get(prevValue[index]) === shape
            ? prevValue[index]
            : atom(shape)
        })
      })
      set(historyAtom, rest);
      set(unselectAtom);
    }
  }
)
