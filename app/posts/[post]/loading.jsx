import React from 'react'

export default function loading() {
    return (
        <div>
            <h1 className='text-3xl font-bold mb-5 flex items-center justify-center gap-4 text-center'><div  
            className='w-6 h-6 border-2 border-dotted rounded-full animate-spin'
            />Loading Post...</h1>
        </div>
    )
}
