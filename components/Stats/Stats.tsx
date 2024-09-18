import { numberOfDotsAtom } from "@/store/dots";
import { useAtomValue } from "jotai";

export const Stats = () => {
  const dotsNumber = useAtomValue(numberOfDotsAtom);

  return (
    <ul>
      <li>Dots: {dotsNumber}</li>
    </ul>
  );
};
