import { getPage } from "@/sanity/sanity-utilis";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>; // params is now a Promise
};

export default async function Page({ params }: PageProps) {
  try {
    const resolvedParams = await params; // Await the Promise

    if (!resolvedParams || typeof resolvedParams.slug !== "string") {
      return notFound();
    }

    const page = await getPage(resolvedParams.slug);

    if (!page) {
      return notFound();
    }

    return (
      <div>
        <h1 className="bg-gradient-to-r from-orange-400 via-red-600 to-purple-700 bg-clip-text text-transparent text-4xl drop-shadow font-extrabold">
          {page.title}
        </h1>

        <div className="text-lg text-gray-700 mt-10">
          <PortableText value={page.content} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error resolving params or fetching page:", error);
    return notFound();
  }
}
