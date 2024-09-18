"use client";

import { MouseEvent } from "react";
import { SvgDots } from "../SvsDots";
import { Stats } from "../Stats";
import { Point } from "@/types/store";
import { useSetAtom } from "jotai";
import { dotsAtom } from "@/store/dots";

export const SvgRoot = () => {
  const setDots = useSetAtom(dotsAtom);

  const handleMouseMove = (event: MouseEvent<SVGSVGElement>) => {
    const point: Point = [event.clientX, event.clientY];

    setDots((prevValue) => [...prevValue, point]);
  };

  return (
    <div>
      <svg width={200} height={200} viewBox="0 0 200 200" onMouseMove={handleMouseMove}>
        <rect width={200} height={200} fill="#eee" />
        <SvgDots />
      </svg>
      <Stats />
    </div>
  );
};
