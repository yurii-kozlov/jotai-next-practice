import { useCommitCount } from "@/hooks/useCommitCount";

export const Stats = () => {

  return (
    <ul>
      <li>Dots: {useCommitCount()}</li>
    </ul>
  );
};
