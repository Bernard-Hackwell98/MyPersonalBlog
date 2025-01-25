import { getPage } from "@/sanity/sanity-utilis"
import { PortableText } from "next-sanity";

type Prop = {
    params: {slug: string}
}

export default async function page( { params }: Prop ) {

    const page = await getPage(params.slug);

    return (
    <div>
        <h1 className="bg-gradient-to-r from-orange-400 via-red-600 to-purple-700 bg-clip-text text-transparent text-4xl drop-shadow font-extrabold">{page.title}</h1>


<div className="text-lg text-gray-700 mt-10">
        <PortableText value={page.content} /></div>
        </div>
)
}
