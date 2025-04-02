import React from "react";

const Spacer = ({ line = false, height = 1 }: { line?: boolean; height?: number }) => {
  const spacers: React.ReactNode[] = [];
  for (let i = 0; i < height; i += 1) {
    spacers.push(
      <div
        key={i}
        className={`flex flex-grow ${line ? "border-r border-[#ccc]" : ""}`}
      >
        &nbsp;
      </div>
    );
  }
  return <>{spacers}</>;
};

export default Spacer;
