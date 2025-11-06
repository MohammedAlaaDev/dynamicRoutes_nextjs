import React from 'react'

export default function PostsLayout({children}) {
    return (
        <div className='container mx-auto'>
            <h1 className='text-center my-5'>Posts Layout</h1>
            {children}
        </div>
    )
}
