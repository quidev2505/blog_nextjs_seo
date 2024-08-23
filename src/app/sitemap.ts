import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch(`https://newsdata.io/api/1/latest?apikey=${process.env.API_KEYS}&country=us&category=sports,health,entertainment,technology`);
  const res = await response.json();
  const postEntries: MetadataRoute.Sitemap = res.results.map(({ article_id }: any) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${article_id}`,
  }))

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`
    },
    ...postEntries
  ]
}