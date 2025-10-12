import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      local age 
      <Link href="/local/page2">go to page2</Link>
    </div>
  )
}
