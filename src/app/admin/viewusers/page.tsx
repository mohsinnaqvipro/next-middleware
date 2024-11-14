import { getSession } from '@/utils/getSession'
import { notFound } from 'next/navigation';
import React from 'react'

const page = async () => {
  // const session = await getSession();

  // if (session.role !== 'admin') {
  //   return notFound()
  // }

  return (
    <div>
      admin users
    </div>
  )
}

export default page
