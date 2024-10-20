import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link  href="/">
     <Image
        className="max-w-[100px] md:max-w-[165px]"
        src="/li.png"
        alt="anik"
        height={100}
        width={165}
      />
    </Link>
  )
}

export default Logo