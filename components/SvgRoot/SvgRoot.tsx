"use client";

import { MouseEvent } from "react";
import { SvgDots } from "../SvsDots";
import { Stats } from "../Stats";
import { Point } from "@/types/atoms";
import { useAtom } from "jotai";
import { handleMouseDownAtom, handleMouseMoveAtom, handleMouseUpAtom } from "@/store/dots";
import { SvgShapes } from "../SvgShapes";

export const SvgRoot = () => {
  const [, handleMouseMove] = useAtom(handleMouseMoveAtom)
  const [, handleMouseDown] = useAtom(handleMouseDownAtom)
  const [, handleMouseUp] = useAtom(handleMouseUpAtom)

  const handleMouseMoving = (event: MouseEvent<SVGSVGElement>): void => {
    const point: Point = [event.clientX, event.clientY];
    const { x, y } = event.currentTarget.getBoundingClientRect();

    handleMouseMove([point[0] - x, point[1] - y]);
  };

  return (
    <div>
      <svg
        width={200}
        height={200}
        viewBox="0 0 200 120"
        onMouseMove={handleMouseMoving}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <rect width={200} height={120} fill="#eee" />
        <SvgShapes />
        <SvgDots />
      </svg>
      <Stats />
    </div>
  );
};
