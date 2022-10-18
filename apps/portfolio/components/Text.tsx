import { ReactNode } from "react";

export const Text = ({
  date,
  children,
  className,
}: {
  date: Date;
  children: ReactNode;
  className: string;
}) => {
  return (
    <>
      <p className={`absolute top-1 text-sm ${className}`}>{children}</p>
      <span className={`absolute  top-5 text-sm ${className}`}>
        {new Intl.DateTimeFormat("en-us").format(date)}
      </span>
    </>
  );
};
