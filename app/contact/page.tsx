import React from 'react'
import Header2 from '../components/header2';
import Image from 'next/image';
import Link from 'next/link'


export default function Contact() {
  return (
    <div>
       <Header2/>
        <div className='h-48'>
          Contact
        </div>
            <main className='flex justify-center space-x-6'>
                <section className=' contactSection1 flex flex-col border-4 border-slate-50'>
                      <div>
                          <div className='flex space-x-4 text-xl'>
                          <Image src={""} alt='' height={20} width={20}/>
                          <span>Call To Us</span>
                          </div>
                        <p className='text-lg'>We are available 24/7, 7days a week</p>
                        <p className='text-lg'>Phone +2348056219922</p>
                      </div>
                      <div>
                        <div className='flex space-x-4 text-xl'>
                        <Image src={""} alt='' height={20} width={20}/>
                        <span className='text-lg'>Write To Us</span>
                        </div>
                        <p className='text-lg'>Fill out our form and we will contact </p>
                        <p className='text-lg'>you within 24 hours</p>
                      
                        <div className='text-lg'>   
                          <Link href={''}>
                            Emails: cheppok4real@yahoo.com
                          </Link>
                        </div>
                        <div className='text-lg'>
                          <Link href={''}>
                            Emails: cheppok4real@gmail.com
                          </Link>
                        </div>
                      </div>
                 </section>

                <section className='contactSection2'>
                 
                    <form className="space-y-4 md:space-y-6" action="#">
                      <section>  
                            <div className="flex shadow-">         
                                <div>
                                  <input type="text" name="name" id="name" className="border-b-2 border-b-gray-300 text-gray-900  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder=" Your Name" required/>
                                </div>
                                <div>
                                  <input type="email" name="email" id="email" className="border-b-2 border-b-gray-300 text-gray-900  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Your Email" required/>
                                  </div>
                                  <div>
                                  <input type="number" name="number" id="phoneNumber" placeholder="Phone Number" className=" border-b-2 border-b-gray-300 text-gray-900  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required/>
                                  </div>
                            </div>

                            <div>
                                  <input type="text" name="text" id="message" placeholder="Your Message" className=" border-b-2 border-b-gray-300 text-gray-900  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required/>
                            </div>
                        </section>
                        
                                <button type="submit" className=" bg-red-600 h-11 rounded-md text-white  text-xs text-center dark:bg-primary-600 dark:hover:bg-primary-700         dark:focus:ring-primary-800">Send Message
                                </button>
                                                              
                      </form>
           
                  </section>      
            </main>
    
    </div>
  )
}
