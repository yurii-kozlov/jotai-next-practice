import { shapeAtomsAtom } from "@/store/shapeAtoms";
import { useAtom } from "jotai";
import { SvgShape } from "../SvgShape";

export const SvgShapes = () => {
  const [shapeAtoms] = useAtom(shapeAtomsAtom);

  return (
    <g>
      {shapeAtoms.map((shapeAtom) => (
        <SvgShape 
          key={`${shapeAtom}`}
          shapeAtom={shapeAtom}
        />
      ))}
    </g>
  );
};