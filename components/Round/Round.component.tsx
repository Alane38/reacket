import { Match as MatchType } from "@/types/tournament";
import React from "react";
import Spacer from "../Spacer/Spacer.component";
import Match from "../Match/Match.component";

const Round = ({
  lastRound = false,
  firstRound = false,
  matches,
  round,
  isOwner,
  onMatchSelect,
}: {
  lastRound: boolean;
  firstRound: boolean;
  matches: MatchType[];
  round: number;
  isOwner: boolean;
  onMatchSelect: (match: MatchType) => MatchType;
}) => {
  const matchElements: React.ReactNode[] = [];
  if (!firstRound && !lastRound) {
    matchElements.push(<Spacer key={`${round}-fs`} />);
  }
  matches.map((match: MatchType, index: number) => {
    if (!firstRound && !lastRound && index > 0) {
      matchElements.push(<Spacer key={`${match.id}-s`} height={2} />);
    }
    matchElements.push(
      <Match
        key={match.id}
        id={match.id}
        round={match.round}
        matchUrls={match.matchUrls}
        teams={{ team1: match.team1, team2: match.team2 }}
        team1={match.team1}
        team2={match.team2}
        winner={match.winner}
        onMatchSelect={(match: MatchType) => onMatchSelect(match) as unknown as MatchType}
        isOwner={isOwner}
      />
    );
    return matchElements;
  });
  if (!firstRound && !lastRound) {
    matchElements.push(<Spacer key={`${round}-ls`} />);
  }
  return <div className="flex flex-col justify-around">{matchElements}</div>;
};

export default Round;
