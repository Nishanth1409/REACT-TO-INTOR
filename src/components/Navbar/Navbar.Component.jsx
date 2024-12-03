import React from 'react'

// react-icons
import {BiChevronDown, BiMenu, BiSearch} from "react-icons/bi"

function NavSm(){
    return <>
        <div className='flex items-center justify-between text-white'>
            <div>
                <h4 className='text-xl font-bold'>It all starts here !!</h4>
                <span className='flex text-xs text-gray-400 cursor-pointer items-centre hover:text-white'>Shivamogga <BiChevronDown /></span>
            </div>
            <div className='w-8 h-8'>
                <BiSearch className='w-full h-full'/>
            </div>
        </div>
    </>
}

function NavMd(){
    return <>
    <div className='flex items-center w-full gap-3 px-3 py-1 bg-white rounded-md'>
    <BiSearch />
    <input type='search' className='w-full bg-transparent border-none focus:outline-none' />
    </div>
    </>
}

function NavLg(){
    return <>
        <div className='container flex items-center justify-between px-4 mx-auto'>
            <div className='flex items-center w-1/2 gap-3 '>
                <div className='w-10 h-10'>
                    <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo"
                     className='w-full h-full'
                    />
                </div>
                <div className='flex items-center w-full gap-3 px-3 py-1 bg-white rounded-md'>
                    <BiSearch />
                    <input type='search'
                    className='w-full bg-transparent border-none focus:outline-none'
                    placeholder='Search for movies, places, events, sports and activites '
                    />
                </div> 
            </div>
            <div className='flex items-center gap-3'>
                <span className='flex items-center text-base text-gray-400 cursor-pointer hover:text-white'>Shivmogga <BiChevronDown /></span>
                <button className='px-2 py-1 text-sm text-white bg-red-600 rounded'>Sign In</button>
                <div className='w-8 h-8 text-white'>
                    <BiMenu  className='w-full h-full'/>
                </div>
            </div>
        </div>
    </>
}

const Navbar = () => {
  return (
    <nav className='px-4 py-3 bg-sky-950'>
        {/* Small Screen Size */}
        <div className='md:hidden'>
            <NavSm />
        </div>
        {/* Medium Screen Size */}
        <div className='hidden md:flex lg:hidden'>
            <NavMd />
        </div>
         {/* Large Screen Size */}
        <div className='hidden md:hidden lg:flex'>
            <NavLg />
        </div>
    </nav>
  )
}

export default Navbar