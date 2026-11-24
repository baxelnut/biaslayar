import type { CSSProperties, ReactNode } from "react";
// Style
import "./Card.css";
// Utils
import { cx } from "@biaslayar/lib";

type CardProps = {
  as?: "div" | "article" | "li";
  interactive?: boolean;
  className?: string;
  children: ReactNode;
};

export function Card({
  as: Tag = "div",
  interactive,
  className,
  children,
}: CardProps) {
  return (
    <Tag className={cx("card", interactive && "interactive", className)}>
      {children}
    </Tag>
  );
}

type CardMediaProps = {
  src: string;
  alt: string;
  ratio?: string;
};

export function CardMedia({ src, alt, ratio }: CardMediaProps) {
  const style = ratio ? ({ "--ratio": ratio } as CSSProperties) : undefined;
  return (
    <div className="card__media" style={style}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}

export function CardBody({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cx("card__body", className)}>{children}</div>;
}
