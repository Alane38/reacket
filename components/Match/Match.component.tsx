import {
  getMatchById,
  MatchTeam,
  Match as MatchType,
} from "@/types/tournament";
import Teams from "../Teams/Teams.component";
import { cn } from "@/lib/utils";
import { Swords } from "lucide-react";

export type MatchProps = MatchType & {
  isOwner: boolean;
  onMatchSelect: (match: MatchType) => MatchType;
  teams: { team1: MatchTeam; team2: MatchTeam };
};

const Match = ({
  id,
  round,
  winner,
  matchUrls,
  isOwner,
  teams,
  onMatchSelect,
}: MatchProps) => {
  const isCompleted = !!winner;

  const setMatchById = (id: string) => {
    const match = getMatchById(id);

    if (match) {
      onMatchSelect(match);
    }
  };

  return (
    <div className="m-2 flex items-center gap-1">
      <div className="mb-6">
        {teams && (
          <>
            <Teams
              teams={teams}
              round={round}
              matchUrls={matchUrls}
              winner={winner}
              isOwner={isOwner}
            />
          </>
        )}
      </div>
      {(isOwner || isCompleted) && onMatchSelect && (
        <button
          onClick={() => setMatchById(id)} // TODO: getMatch With query!
          className={cn(
            "p-1 rounded-md transition-colors hover:bg-zinc-700 border",
            isOwner && !isCompleted && "text-primary"
          )}
          disabled={!isOwner && !isCompleted}
        >
          <Swords size={14} />
        </button>
      )}
    </div>
  );
};

export default Match;
