import { useCommitCount } from "@/hooks/useCommitCount";

export const Stats = () => {
  console.log('heloo')
  return (
    <ul>
      <li>Dots: {useCommitCount()}</li>
    </ul>
  );
};
