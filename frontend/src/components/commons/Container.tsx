"use client";
type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="max-w-[1200px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-4 bg-slate-500 rounded-md">
      {children}
    </div>
  );
};

export default Container;
