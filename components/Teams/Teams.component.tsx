import { cn } from "@/lib/utils";
import { MatchTeam } from "@/types/tournament";

type SingleTeamProps = {
  team: MatchTeam
  winner: string | null
  round: number
}

const SingleTeam = ({
  team,
  winner,
  round,
}: SingleTeamProps) => {
  const isWinner = winner === team.name;
  const isCompleted = !!winner;
  const animationDelay = `${round * 0.1 + team.roundWins * 0.05}s`;

  return (
    <div
      className={cn(
        "bracket-match relative w-64 bg-[#1e1e2e] rounded-md p-3 border border-zinc-800 transition-all",
        isCompleted && "border-zinc-700"
      )}
      style={{ animationDelay }}
    >
      <div
        className={cn(
          "flex justify-between items-center p-2 rounded bg-[#181825]",
          isWinner && "bg-[#1c2731] border-l-2 border-primary"
        )}
      >
        <span className="font-medium truncate max-w-28">
          {team.name || "TBD"}
        </span>
        <span
          className={cn(
            "text-sm font-mono font-bold",
            isWinner && "text-green-500"
          )}
        >
          {isCompleted ? team.score : "-"}
        </span>
      </div>
    </div>
  );
};

export type TeamsProps = {
  teams: { team1: MatchTeam; team2: MatchTeam };
  round: number;
  matchUrls: string[];
  winner: string | null;
  isOwner: boolean;
};

const Teams = ({
  teams,
  round,
  matchUrls,
  winner,
  isOwner,
}: TeamsProps) => {
  const { team1, team2 } = teams;

  const matchNumber = `R${round}`;

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-xs text-muted-foreground">{matchNumber}</span>
      </div>

      <div className="space-y-2">
        <SingleTeam team={team1} winner={winner} round={round} />

        <SingleTeam team={team2} winner={winner} round={round} />
      </div>
    </div>
  );
};

export default Teams;
