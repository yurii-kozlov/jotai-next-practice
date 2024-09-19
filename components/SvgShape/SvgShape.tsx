import { Shape } from "@/types/atoms";
import { PrimitiveAtom, useAtom } from "jotai";
import { FC } from "react";

interface SvgShapeProps {
  shapeAtom: PrimitiveAtom<Shape>
}

export const SvgShape: FC<Readonly<SvgShapeProps>> = ({ shapeAtom }) => {
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