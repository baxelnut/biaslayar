import type { ReactNode } from "react";
// Style
import "./Section.css";
// Components
import { Container } from "./Container";
// Utils
import { cx } from "@biaslayar/lib";

type SectionProps = {
  id?: string;
  tone?: "default" | "muted" | "dark";
  containerSize?: "default" | "narrow" | "wide";
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  tone = "default",
  containerSize,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cx(
        "section",
        tone !== "default" && tone,
        tone === "dark" && "on-dark",
        className,
      )}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
