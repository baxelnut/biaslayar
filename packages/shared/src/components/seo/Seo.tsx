import { useLocation } from "react-router-dom";
// Utils
import { SITE } from "@biaslayar/data";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

export function Seo({
  title,
  description = SITE.description,
  path,
  image = SITE.defaultImage,
  type = "website",
  noindex,
}: SeoProps) {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${SITE.fullName}` : SITE.defaultTitle;
  const url = new URL(path ?? pathname, SITE.url).toString();
  const imageUrl = new URL(image, SITE.url).toString();

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:site_name" content={SITE.fullName} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
