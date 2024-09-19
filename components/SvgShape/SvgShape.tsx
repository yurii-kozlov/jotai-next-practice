import { shapeAtom } from "@/store/shape/shape";
import { useAtom } from "jotai";

export const SvgShape = () => {
  const [shape] = useAtom(shapeAtom)
  return (
    <g>
      <path
        d={shape.path}
        fill="none"
        stroke="black"
        strokeWidth="3"
      />
    </g>
  );
};