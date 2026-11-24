// Style
import "./SectionHeading.css";
// Components
import { Kicker } from "./Kicker";
// Utils
import { cx } from "@biaslayar/lib";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cx(
        "section-header",
        align === "center" && "center",
        className,
      )}
    >
      {eyebrow && <Kicker>{eyebrow}</Kicker>}
      <Tag>{title}</Tag>
      {description && <p className="lede">{description}</p>}
    </div>
  );
}
