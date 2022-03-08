import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Blog: NextPage = () => {
  return (
    <div className="p-12 text-xl">
      Blog pojawi się wkrótce...{' '}
      <Link href="/">
        <a className="underline">Wróć do strony głównej</a>
      </Link>
    </div>
  )
}

export default Blog
