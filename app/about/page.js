import Link from 'next/link'
import React from 'react'

export default function about() {
  return (
    <div>
      <h2>about page</h2>
      <Link href={'/about'}> About </Link>
    </div>
  )
}
