import React from 'react'
import Link from 'next/link';

export default function Button({ path, label }) {
    return (
        <>
            <Link href={path}>
                <button className="p-4 font-bold hover:text-blue-600 transition-all duration-300 cursor-pointer">{label}</button>
            </Link>
        </>
    )
}
