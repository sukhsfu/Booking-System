"use client";
export default function SearchBar({
  icon,
  placeHolder,
}: {
  icon: JSX.Element;
  placeHolder: string;
}) {
  return (
    <div className="bg-white rounded-full px-3 py-1 text-sm flex flex-row gap-2 items-center w-[300px]">
      {icon}
      <input
        className="border-none focus:outline-none w-full"
        type="text"
        placeholder={placeHolder}
      />
    </div>
  );
}
