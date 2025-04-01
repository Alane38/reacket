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
    <div className="m-2 flex">
      <div className="flex justify-center flex-col w-8 font-bold text-[#1e1e2e]">
        {id}
      </div>
      {(isOwner || isCompleted) && onMatchSelect && (
        <button
          onClick={() => setMatchById(id)} // TODO: getMatch With query!
          className={cn(
            "p-1 rounded-full transition-colors hover:bg-zinc-700",
            isOwner && !isCompleted && "text-primary"
          )}
          disabled={!isOwner && !isCompleted}
        >
          <Swords size={14} />
        </button>
      )}
      <div className="w-80">
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
    </div>
  );
};

export default Match;
