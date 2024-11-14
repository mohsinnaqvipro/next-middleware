import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <Link href='/'>home</Link>
        <Link href='/login'>login</Link>
        <Link href='/signup'>signup</Link>
        <Link href='/aboutus'>aboutus</Link>
        <Link href='/user/order'>user order</Link>
        <Link href='/user/profile'>user profile</Link>
        <Link href='/admin/vieworders'>admin orders</Link>
        <Link href='/admin/viewusers'>admin view users</Link>
      </nav>
    </header>
  )
}

export default Header
