import { Point } from "@/types/store";
import { atom } from "jotai";

export const dotsAtom = atom<Point[]>([]);

// This is an example of a computed property like in MobX or Redux
export const numberOfDotsAtom = atom((get) => get(dotsAtom).length);

// const totalAtom = atom((get) => {
//   const price = get(priceAtom);
//   const amount = get(amountAtom);

//   return price * amount;
// })
