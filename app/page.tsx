import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export default function Page () {
  return (
    <div>
      <h1>
        Hello, Nextjs!
      </h1>
      <Link href={'/dashboard'}>dashboard</Link>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Nextjs'
}
