  'use server'

import { createClient } from "next-sanity";

const client = createClient({
    projectId: '5ao0nnb7',
    dataset: 'production',
    apiVersion: '2024-01-10',
    useCdn: 'false',
});

export async function getStaticProps(){
    const posts = await client.fetch(`*[_type == "posts"]`);
    return {
        props: {
            posts: [posts]
        }
    }
}