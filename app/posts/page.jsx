import React from 'react'
import Link from 'next/link';

export default async function Posts() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts",
        {
            next: {
                revalidate: 120,
            }
        }
    )

    const posts = await response.json();

    const postsJSX = posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
            <div  className="mb-4 p-4 cursor-pointer border border-gray-300 rounded-lg bg-white shadow-md">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.body}</p>
            </div>
        </Link>
    ));

    return (
        <>
            <h1 className='text-3xl font-bold mb-5 text-center'>Posts Page</h1>
            <div>
                {postsJSX}
            </div>
        </>
    )
}
