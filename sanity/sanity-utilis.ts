import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";

export async function getProjects() : Promise<Project[]>{
    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug" : slug.current,
        "image": images.asset->url, // Changed "image" to "images"
        url,
        content
        }`
    )
}

export async function getProject(slug: string): Promise<Project> {
    return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": images.asset->url, // Changed "image" to "images"
        url,
        content
    }`,
    { slug }
    )
}

export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current
        }`
    )

}

export async function getPage(slug): Promise<Page> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content
        }`,
        {slug}
    )

}
