const getRoundHeaderText = (round: number, totalRounds: number) => {
  if (round === totalRounds) {
    return "Finals";
  }
  if (round === totalRounds - 1) {
    return "Semi-finals";
  }
  return `Round ${round}`;
};
const RoundHeader = ({ round, totalRounds }: { round: number; totalRounds: number }) => (
  console.log("round", round, totalRounds),
  <div
    className={`w-80 mr-32 p-1 text-2xl font-bold ml-8 
    ${round === totalRounds ? "mr-0" : ""}`}
  >
    {getRoundHeaderText(round, totalRounds)}
  </div>
);

export default RoundHeader;
