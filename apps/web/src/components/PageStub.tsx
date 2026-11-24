// Components
import { PageHeader } from "@biaslayar/components";
import { Seo } from "./Seo";

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
      <Seo title={title} />
      <PageHeader title={title} description={description} />
    </>
  );
}
