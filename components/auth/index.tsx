'use client'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'

export default function Auth(): React.JSX.Element {
  const { status } = useSession()
  return (
    <div className={`fixed inset-0 z-[1337] bg-[#00000080] flex items-center justify-center transition-all duration-[500ms] ${status === 'unauthenticated' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className='rounded-[14px] w-[380px] h-auto bg-[#000]' style={{boxShadow: 'rgba(255, 255, 255, 0.04) 0 0 20px'}}>

        <p className='text-[#fff] text-[26px] font-[400] text-center pt-4 w-full'> Hello </p>
        <p className='text-[#f6fcff] text-center text-[14px] w-full pt-[2px]'> Sign in now and let’s get started! </p>

        <div className='pt-6 pb-7 px-6 text-white flex flex-col gap-2'>
          <button onClick={() => signIn('42-school')} className='w-full h-[46px] bg-[#fff] rounded-lg text-[#000] flex items-center pl-4 transition-all hover:bg-gray-100'>
            <Image
              src={'./42.svg'}
              alt=' '
              width={28}
              height={28}
              draggable={false}
              priority={true}
            />
            <p className='pl-[56px]'> Continue with 42 </p>
          </button>
          <button onClick={() => signIn('google')} className='w-full h-[46px] bg-[#fff] rounded-lg text-[#000] flex items-center pl-[20px] transition-all hover:bg-gray-100'>
            <Image
              src={'./google.svg'}
              alt=' '
              width={22}
              height={22}
              draggable={false}
              priority={true}
            />
            <p className='pl-10'> Continue with Google </p>
          </button>
        </div>

      </div>
    </div>
  )
}