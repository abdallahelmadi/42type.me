'use client'
import Image from 'next/image'
import Link from 'next/link'
import { IconLogout } from '@/lib/icons'
import { signOut } from 'next-auth/react'

export default function Header(): React.JSX.Element {
  return (
    <header className='flex justify-between items-center mb-10'>

      <Link href={'/'}>
        <Image
          src={'./42type.svg'}
          alt=' '
          width={66}
          height={41}
          draggable={false}
          priority={true}
        />
      </Link>

      <div className='relative'>
        <img
          src={'https://cdn.intra.42.fr/users/f3d71c689d09b092d998071ea7d28d73/medium_abdael-m.jpg'}
          alt=' '
          width={40}
          height={40}
          draggable={false}
          className='overflow-hidden rounded-[50%]'
        />
        <div className='absolute bg-white text-black rounded-[10px] text-[11px] font-[500] px-[3px] bottom-[-6px] left-[-2px]'>
          999
        </div>
      </div>

    </header>
  )
}