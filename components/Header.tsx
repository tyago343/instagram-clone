import Image from 'next/image'
import React from 'react'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import logoDesktop from '../images/instagram-logo-desktop.png'
import logoMobile from '../images/instagram-logo-mobile.png'
import { signIn, signOut, useSession } from 'next-auth/react'
function Header() {
  const { data: session } = useSession()

  return (
    <div className="sticky top-0 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between xl:mx-auto">
        {/* Left */}
        <div className="relative hidden w-24 cursor-pointer lg:inline-grid">
          <Image src={logoDesktop} layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden   ">
          <Image src={logoMobile} layout="fill" objectFit="contain" />
        </div>
        {/* Middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="sm:text-su block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black"
              type="text"
              name="search"
              id=""
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right */}
        <div className="item-center flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />
          {session ? (
            <>
              <div className="navBtn relative">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img src={session?.user?.image} alt="profile pic" className="h-10 cursor-pointer rounded-full" onClick={signOut}/>
            </>
          ) : (
            <button onClick={signIn}>Sign in</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
