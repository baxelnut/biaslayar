import type { ReactNode } from "react";
// Style
import "./Table.css";
// Utils
import { cx } from "@biaslayar/lib";

type TableProps = {
  caption?: string;
  className?: string;
  children: ReactNode;
};

export function Table({ caption, className, children }: TableProps) {
  const region = caption
    ? { role: "region", "aria-label": caption, tabIndex: 0 }
    : {};

  return (
    <div className={cx("table-wrap", className)} {...region}>
      <table className="table">
        {caption && <caption className="visually-hidden">{caption}</caption>}
        {children}
      </table>
    </div>
  );
}
