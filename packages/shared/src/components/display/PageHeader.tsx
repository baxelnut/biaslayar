// Style
import "./PageHeader.css";
// Components
import { Container, Kicker } from ".";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="page-header on-dark">
      <Container>
        <div className="stack col gap-3">
          {eyebrow && <Kicker>{eyebrow}</Kicker>}
          <h1>{title}</h1>
          {description && <p className="lede">{description}</p>}
        </div>
      </Container>
    </header>
  );
}
