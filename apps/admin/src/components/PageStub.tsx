// Components
import { PageHeader } from "@biaslayar/components";

type PageStubProps = {
  title: string;
  description?: string;
};

export function PageStub({
  title,
  description = "Halaman ini sedang dalam pengembangan.",
}: PageStubProps) {
  return (
    <>
      <PageHeader title={title} description={description} />
    </>
  );
}
