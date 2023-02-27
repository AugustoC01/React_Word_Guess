import "./Letter.css";

interface LetterProps {
  status?: string;
  row: number;
  id: number;
  attempt: number;
}

export const Letter = ({ status, row, id, attempt }: LetterProps) => {
  const isCurrent = () => {
    return row === attempt;
  };
  let letterStyle = isCurrent() && status === null ? "" : status;

  const letterId = JSON.stringify(id);
  return (
    <input
      type="text"
      name={`${row}-letter-${letterId}`}
      id={letterId}
      className={`initial ${letterStyle}`}
      maxLength={1}
    />
  );
};
