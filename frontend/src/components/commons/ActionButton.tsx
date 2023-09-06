"use client";
import { MouseEventHandler } from "react";

export default function ActionButton({
  label,
  clickHandler,
  icon,
}: {
  label: string;
  clickHandler: MouseEventHandler;
  icon: JSX.Element;
}) {
  return (
    <div
      className="bg-slate-800 text-white py-1 px-2 rounded-full text-sm inline-flex flex-shrink-0 flex-row gap-2 items-center cursor-pointer"
      onClick={clickHandler}
    >
      {icon}
      {label}
    </div>
  );
}
