import React from 'react'
import Header from '../components/header';
import Image from 'next/image';
import Link from "next/link"




export default function Header2() {
  return (
    <div>
      <div className='flex items-center relative '>
         <div className='w-11/12'>
         <Header/>
         </div>
         <div className='flex h-6 space-x-4 absolute right-32 top-7 '>
          <Link href={''}>
          <Image src={'/images/notification.jpg'} alt='' height={50} width={25} className='p-0.5'/>
          </Link>
          <Link href={''}>
          <Image src={'/images/Cart1.jpg'} alt='' height={50} width={25}/>
          </Link>
          <Link href={''}>
          <Image src={'/images/user.jpg'} alt='' height={50} width={25}/>
          </Link> 
         </div>
      </div>
       
        
    </div>
  )
}
