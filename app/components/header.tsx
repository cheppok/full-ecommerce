


'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="nav-container flex justify-around items-end pt-6 border-b-2 pb-6">
      <Link href="/#" className="navbar-brand mr-12 text-2xl font-bold">
        Cheppok
      </Link>
      <div>
        <ul className="flex justify-between w-80 font-semibold text-lg">
          {['/cheppok', '/contact', '/about', '/signup'].map((path) => (
            <li key={path}>
              <Link href={path}
                     className={pathname === path ? 'currentPage' : ''}>
                  {path === '/cheppok' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
                
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <form className="nav-form relative bg-slate-50 text-dark" role="search">
        <input
          type="text"
          placeholder="what are you looking for?"
          className="mr-10 ml-2 p-2 text-xs bg-slate-50 text-dark"
        />
        <button className="btn absolute right-1 top-2" type="submit">
          <Image src="/images/search.png" height={15} width={15} alt="search" />
        </button>
      </form>
    </div>
  );
}


// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useRouter } from 'next/router';

// export default function Header() {
//   const router = useRouter();

//   return (
//     <div className="nav-container flex justify-around items-end pt-6 border-b-2 pb-8">
//       <Link href="/" className="navbar-brand mr-12 text-2xl font-bold">
//         Cheppok
//       </Link>
//       <div>
//         <ul className="flex justify-between w-80 font-semibold">
//           {['/cheppok', '/contact', '/about', '/signup'].map((path) => (
//             <li key={path}>
//               <Link href={path}>
//                 <a className={router.pathname === path ? 'underline' : ''}>
//                   {path === '/cheppok' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
//                 </a>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <form className="nav-form relative bg-slate-50 text-dark" role="search">
//         <input
//           type="text"
//           placeholder="what are you looking for?"
//           className="mr-10 ml-2 p-2 text-xs bg-slate-50 text-dark"
//         />
//         <button className="btn absolute right-1 top-2" type="submit">
//           <Image src="/images/search.png" height={15} width={15} alt="search" />
//         </button>
//       </form>
//     </div>
//   );
// }









// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image';



// export default function Header() {
//   return (

    
//      <div className="nav-container  flex justify-around item items-end pt-6  border-b-2 pb-8" >
//           <Link href={"/"}className="navbar-brand mr-12 text-2xl font-bold ">Cheppok</Link>
//             <div className="">
//                 <ul className='flex justify-between w-80 font-semibold  '>
//                     <li >
//                         <a href="/cheppok">Home</a>
//                     </li>
//                     <li>
//                         <a href="/contact">Contact</a>
//                     </li>
//                     <li>
//                         <a href="/about">About</a>
//                     </li>
//                     <li >
//                         <a href="/signup">Sign Up</a>
//                     </li>
//                 </ul>
//             </div>
          
//              <form className="nav-form relative  bg-slate-50 text-dark " role="search">
//                 <input type="text" placeholder='what are you looking for?' className='mr-10 ml-2 p-2 text-xs bg-slate-50 text-dark' />
//                  <button className="btn absolute right-1 top-2  " type="submit">
//                     <Image src={'/images/search.png'} height={15} width={15} alt='search'  />
//                  </button>
                
//             </form>
//       </div>
    
//   )
// };
