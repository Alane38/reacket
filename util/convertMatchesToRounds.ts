import { Match } from "@/types/tournament";

export default function convertMatchesToRounds(matches: Match[]) {
  const roundsObject = {};
  matches.forEach((match) => {
    const { round } = match;
    if (!round) return;

    if (!roundsObject[round]) {
      roundsObject[round] = { round, matches: [] };
    }
    roundsObject[round].matches.push(match);
  });
  const rounds: { round: number; matches: Match[] }[] =
    Object.values(roundsObject);
  return rounds.sort((a, b) => a.round - b.round);
}
