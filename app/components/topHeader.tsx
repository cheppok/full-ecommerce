import React from 'react'
import Link from 'next/link';

export default function TopHeader() {
  return (
    <div className='bg-black text-white text-sm w-full h-12 flex justify-center items-center relative  '>
        <span>Summer Sales For All Swim Suit And Free Express Delivery-OFF 50%! 
            <Link href={'/order'}>
            <span className='underline pl-3'>ShopNow</span>
            </Link>
           
        </span>
        <span className=' absolute right-32'>English</span>
    </div>
  )
}
