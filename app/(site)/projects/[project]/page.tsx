import { getProject } from "@/sanity/sanity-utilis";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

type Prop = {
  params: Promise<{ project: string }>; // params as a Promise
};

export default async function ProjectPage({ params }: Prop) {
  try {
    const resolvedParams = await params; // Resolve the Promise

    if (!resolvedParams || typeof resolvedParams.project !== "string") {
      return notFound();
    }

    const project = await getProject(resolvedParams.project);

    if (!project) {
      return notFound();
    }

    return (
      <div>
        {/* Header */}
        <header className="flex justify-between items-center">
          <h1 className="bg-gradient-to-r from-orange-400 via-red-600 to-purple-700 bg-clip-text text-transparent text-4xl drop-shadow font-extrabold">
            {project.name}
          </h1>

          <a
            href={project.url}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-yellow-400 transition-opacity flex justify-center items-center gap-2 border font-montserrat text-lg leading-none"
          >
            View Project
          </a>
        </header>

        {/* Content */}
        <div className="text-lg text-gray-700 mt-5">
          <PortableText value={project.content} />
        </div>

        {/* Image */}
        <Image
          src={project.image}
          alt={project.name}
          width={1920}
          height={1020}
          className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />
      </div>
    );
  } catch (error) {
    console.error("Error resolving params or fetching project:", error);
    return notFound();
  }
}
