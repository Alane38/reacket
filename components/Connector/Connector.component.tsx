import React from "react";
import Spacer from "../Spacer/Spacer.component";

const Connector = ({ round }: { round: number }) => {
  const rightLines = 2 ** (round - 1);
  const leftLines = 2 ** round;

  const rightElements: React.ReactNode[] = [];
  const leftElements: React.ReactNode[] = [];

  for (let i = 0; i < rightLines; i += 1) {
    if (i > 0) {
      rightElements.push(<Spacer key={`${round}-${i}-s`} height={2} />);
    }
    rightElements.push(
      <div key={`${round}-${i}-l`} className="border border-[#ccc]" />
    );
  }

  for (let i = 0; i < leftLines; i += 1) {
    if (i % 2) {
      leftElements.push(<Spacer key={`${round}-${i}-s`} line height={2} />);
    } else if (i > 0) {
      leftElements.push(<Spacer key={`${round}-${i}-s`} height={2} />);
    }
    leftElements.push(
      <div key={`${i}-l`} className="border border-[#ccc]" />
    );
  }

  return (
    <div className="flex">
      <div data-test="connector-left" className="flex flex-col justify-center w-16">
        <Spacer key={`${round}-l-t`} />
        {leftElements}
        <Spacer key={`${round}-l-b`} />
      </div>
      <div data-test="connector-right" className="flex flex-col justify-center">
        <Spacer key={`${round}-r-t`} />
        {rightElements}
        <Spacer key={`${round}-r-b`} />
      </div>
    </div>
  );
};

export default Connector;
