import { dotsAtom } from "@/store/dots"
import { useAtomValue } from "jotai"

export const SvgDots = () => {
  const dots = useAtomValue(dotsAtom);

  return (
    <g>
      {dots.map(([x, y]) => (
        <circle key={Math.random()} cx={x} cy={y} r="2" fill="#aaa" />
      ))}
    </g>
  )
}