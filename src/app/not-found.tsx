import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h1>page not found</h1>
      <Link href='/'>return home</Link>
    </div>
  )
}

export default NotFound
