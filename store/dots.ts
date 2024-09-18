import { Point } from "@/types/store";
import { atom } from "jotai";

export const dotsAtom = atom<Point[]>([]);

export const drawingAtom = atom<boolean>(false);

// Write-only atom prevents unnecessary rerenders
export const handleMouseDownAtom = atom(
  null,
  (get, set) => {
    set(drawingAtom, true)
  }
);

// Write-only atom
export const handleMouseUpAtom = atom(
  null,
  (get, set) => {
    set(drawingAtom, false)
  }
)

// This is an example of a computed property like in MobX or Redux
export const numberOfDotsAtom = atom((get) => get(dotsAtom).length);

// const totalPriceAtom = atom((get) => {
//   const price = get(priceAtom);
//   const amount = get(amountAtom);

//   return price * amount;
// })

// Write-only atom that depends on another atom's value
// Write-only atoms are very powerful. We can organize updating logic outside components
export const handleMouseMoveAtom = atom(
  null,
  (get, set, update: Point) => {
    if (get(drawingAtom)) {
      set(dotsAtom, (prevValue) => [...prevValue, update]);
    }
  }
)