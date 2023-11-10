"use client"
import React, { useState } from 'react'
import { GiHamburgerMenu} from 'react-icons/gi';
import {RxCross2} from 'react-icons/rx';
import Logo from '../Logo'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
// import { LogoutBtn } from './index';



const Header = ({menuOptions, admin = false}) => {
    const [menuToggle, setMenuToggle] = useState(false)
    const pathname = usePathname()
    
    const userOptions = [
        {
            name: "Home",
            slug: "/",
        },
        {
            name: "About",
            slug: "/ablout",
        },
        {
            name: "ITI",
            slug: "/iti",
        },
        {
            name: "Librery",
            slug: "/librery",
        },
        {
            name: "Contact Us",
            slug: "/constact us",
        }
    ]

    const navOptions = menuOptions || userOptions

  return (
    <>
    
    {/* header */}
   <div className='bg-white w-full p-2 flex justify-between items-center select-none md:px-20 shadow-md shadow-indigo-500/40 sticky top-0 z-10'>
   <Logo/>
  <div>
    <nav className={`absolute h-screen w-60 top-0 right-0 pt-20 bg-white/95 ${menuToggle?'':'hidden'} md:static md:block md:w-auto md:h-auto md:p-0 md:bg-transparent`}>
        <ul className='flex flex-col items-center w-full space-y-3 font-bold md:flex-row md:space-y-0 md:space-x-6 '>
           
           {navOptions?.map((option)=>(
             <li key={option.name} className='cursor-pointer'>
                 <Link className={`link ${pathname === option.slug ? 'text-orange-400' : 'text-gray-600'}`} href={option.slug}>
                 {option.name}
          </Link>
         </li>
           ))}

           {/* {admin && <LogoutBtn className='text-black'/>} */}
        </ul>
    </nav>
    <div className='relative z-30 cursor-pointer py-1 px-2 rounded md:hidden' onClick={()=>{setMenuToggle((pre)=> !pre)}} >
        {!menuToggle? <GiHamburgerMenu className='text-3xl text-gray-500'/>: <RxCross2 className='text-3xl text-gray-500'/>}
    </div>
  </div>
   </div>

   
   
  
   
   </>
  )
}

export default Header