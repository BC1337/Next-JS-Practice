'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-100 shadow-md">
      <div className="flex items-center text-gray-800 px-4 py-7">
        <Link className="font-semibold text-xl" href="/">My Website</Link>
      </div>
      <div className="w-full block lg:items-center lg:w-auto">
        <div className="text-sm  ml-auto">
          <Link href="/about">
            <p className="block mt-4 inline-block lg:mt-0 text-gray-600 hover:text-gray-800 px-4 py-2">
              About
            </p>
          </Link>
          <Link href="/contact">
            <p className="block mt-4 inline-block lg:mt-0 text-gray-600 hover:text-gray-800 px-4 py-2">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </nav>
  )
}
