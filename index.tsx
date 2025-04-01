import { Match, Tournament } from "@/types/tournament";
import Connector from "./components/Connector/Connector.component";
import Round from "./components/Round/Round.component";
import RoundHeader from "./components/RoundHeader/RoundHeader.component";
import convertMatchesToRounds from "./util/convertMatchesToRounds";

const CustomReacket = ({
  matches,
  tournament,
  isOwner,
  onMatchSelect,
}: {
  matches: Match[];
  tournament: Tournament;
  isOwner: boolean;
  onMatchSelect: (match: Match) => Match;
}) => {
  console.log("received customReacket", matches);
  const rounds = convertMatchesToRounds(matches);
  return (
    <div>
      <div className="mb-4 flex">
        {rounds.map((round: { round: number; matches: Match[] }) => { 
          console.log("round", round, rounds);
          return (
          <RoundHeader
            key={`round-header-${round.round}`}
            round={rounds.length - round.round}
            totalRounds={rounds.length}
          />
        )})}
      </div>
      <div className="flex">
        {rounds.map(
          (round: { round: number; matches: Match[] }, index: number) => {
            const roundNumber = rounds.length - index;
            if (index > 0) {
              return (
                <>
                  <Connector key={`${roundNumber}-c`} round={roundNumber} />
                  <Round
                    key={`round-connector-${round.round}`}
                    firstRound={index === rounds.length - 1}
                    lastRound={index === 0}
                    matches={round.matches}
                    round={round.round}
                    isOwner={isOwner}
                    onMatchSelect={(match: Match) => onMatchSelect(match) as unknown as Match}
                  />
                </>
              );
            }
            return (
              <Round
                key={`round-round-${round.round}`}
                firstRound={index === rounds.length - 1}
                lastRound={index === 0}
                matches={round.matches}
                round={round.round}
                isOwner={isOwner}
                onMatchSelect={(match: Match) => onMatchSelect(match) as unknown as Match}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default CustomReacket;
