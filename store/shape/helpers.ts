import { Point } from "@/types/atoms";

export const getPointsToPath = (points: readonly Point[]): string => {
  let d = '';

  points.forEach((point) => {
    if (d) {
      d += ` L ${point[0]} ${point[1]}`;
    } else {
      d = ` M ${point[0]} ${point[1]}`;
    }
  });

  return d;
}