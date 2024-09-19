import { selectAtom, selectedAtomCreator } from "@/store/selectedShapeAtom";
import { ShapeAtom } from "@/types/atoms";
import { useAtom, useSetAtom } from "jotai";
import { FC, useMemo } from "react";

interface SvgShapeProps {
  shapeAtom: ShapeAtom
}

export const SvgShape: FC<Readonly<SvgShapeProps>> = ({ shapeAtom }) => {
  const [shape] = useAtom(shapeAtom);
  const selectShapeAtom = useSetAtom(selectAtom);
  const [isAtomSelected] = useAtom(useMemo(() => {
    return selectedAtomCreator(shapeAtom)
  }, [shapeAtom]))

  return (
    <g onClick={() => selectShapeAtom(shapeAtom)}>
      <path
        d={shape.path}
        fill="none"
        opacity={isAtomSelected ? "0.3" : "0"}
        stroke="red"
        strokeWidth="12"
      />
      <path
        d={shape.path}
        fill="none"
        stroke="black"
        strokeWidth="3"
      />
    </g>
  );
};