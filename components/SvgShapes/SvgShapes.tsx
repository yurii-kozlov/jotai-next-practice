import { useAtom } from "jotai";
import { SvgShape } from "../SvgShape";
import { shapeAtomsAtom } from "@/store/history";

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