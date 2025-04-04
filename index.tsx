import { Match, Tournament } from "@/types/tournament";
import Connector from "./components/Connector/Connector.component";
import Round from "./components/Round/Round.component";
import RoundHeader from "./components/RoundHeader/RoundHeader.component";
import convertMatchesToRounds from "./util/convertMatchesToRounds";
import { Fragment } from "react/jsx-runtime";

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
  // console.log("received customReacket", matches);
  const rounds = convertMatchesToRounds(matches);
  return (
    <div>
      <div className="mb-4 flex border">
        {rounds.map((round: { round: number; matches: Match[] }, index) => {
          // console.log("round", round, rounds);
          return (
            <RoundHeader
              key={`round-header-${round.round}`}
              round={round.round}
              totalRounds={rounds.length}
            />
            // <div className="border p-4 " />
          );
        })}
      </div>
      <div className="flex border">
        {rounds.map(
          (round: { round: number; matches: Match[] }, index: number) => {
            const roundNumber = rounds.length - index;
            // console.log("roundNumber", roundNumber);
            // if (index > 0) {
              return (
                <div key={`round-connector-${round.round}`} className="border flex">
                  { index > 0 ? <Connector round={roundNumber} /> : <Connector round={roundNumber} hidden />}
                  <Round
                    firstRound={index === rounds.length - 1}
                    lastRound={index === 0}
                    matches={round.matches}
                    round={round.round}
                    isOwner={isOwner}
                    onMatchSelect={(match: Match) =>
                      onMatchSelect(match) as unknown as Match
                    }
                  />
                </div>
              );
            // }
            // return (
            //   <Round
            //     key={`round-round-${round.round}`}
            //     firstRound={index === rounds.length - 1}
            //     lastRound={index === 0}
            //     matches={round.matches}
            //     round={round.round}
            //     isOwner={isOwner}
            //     onMatchSelect={(match: Match) =>
            //       onMatchSelect(match) as unknown as Match
            //     }
            //   />
            // );
          }
        )}
      </div>
    </div>
  );
};

export default CustomReacket;
