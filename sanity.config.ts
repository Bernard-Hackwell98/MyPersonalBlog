import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'; 
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: "pkqegd35",
    dataset: "production",
    title: "my personal website",
    apiVersion: "2025-01-23",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas}

})

export default config
