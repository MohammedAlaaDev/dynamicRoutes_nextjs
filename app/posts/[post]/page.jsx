import React, { Suspense } from 'react'

export default async function Post({ params }) {

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const { post } = await params;

    // using post
    // const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${post}`,
    //     {
    //         next: {
    //             revalidate: 120,
    //         }
    //     }
    // )


    // using posts

    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts`,
        {
            next: {
                revalidate: 120,
            }
        }
    )

    const postsData = await postResponse.json();

    const postData = await postsData.find((p) => {
        return p.id == parseInt(post);
    })

    // console.log(postData);

    return (
        <div>
            <h1 className='text-3xl font-bold mb-5 text-center'>Post Detail Page</h1>
            <Suspense fallback={
                <div>
                    <h1 className='text-3xl font-bold mb-5 flex items-center justify-center gap-4 text-center'><div
                        className='w-6 h-6 border-2 border-dotted rounded-full animate-spin'
                    />Loading Post...</h1>
                </div>
            }>
                <div className="mb-4 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
                    <h2 className="text-xl font-semibold mb-2">{postData.title}</h2>
                    <p className="text-gray-700">{postData.body}</p>
                </div>
            </Suspense>
        </div>
    )
}
