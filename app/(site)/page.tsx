import { getProjects } from "@/sanity/sanity-utilis"
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  
  const projects = await getProjects();
  
  return (
    
    <div>
      <h1 className="text-4xl font-extrabold">Hello I am <span className="bg-gradient-to-r from-orange-400 via-red-600 to-purple-700 bg-clip-text text-transparent"> Hammad</span>
      
      </h1>

      <p className="mt-3 text-xl text-gray-600">Welcome to my test blog built using Sanity, Tailwind, NextJs and Typescript. I wont post anything here It&apos;s just a way to showcase My skills</p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      { projects.map( (project) => (
        <Link 
        href={`/projects/${project.slug}`}
        key={project._id} 
        className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-orange-600 transition">
          {project.image && (
            <Image
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="object-cover rounded-xl border border-gray-500"
            />
          )}

          <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-600 to-purple-700 bg-clip-text text-transparent">
          {project.name}
          </div>
        </Link>
      )
      ) }
      </div>
    </div>
  )
}
