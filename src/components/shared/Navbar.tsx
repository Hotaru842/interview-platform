import React from 'react'
import { ModeToggle } from '@/components/ui/ModeToggle';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../images/logo.svg";
import { SignedIn, UserButton } from '@clerk/nextjs';
import DashboardButton from './DashboardButton';

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center gap-2 mr-6 hover:opacity-80 transition-opacity">
          <Image 
            src={logo}
            alt="logo"
            className="size-8"
          />
          <div className="flex items-center gap-1">
            <span className="text-2xl font-black text-[#4004fc]">Code</span>
            <span className="text-md font-normal text-gray-700 dark:text-white">sync</span>
          </div>
        </Link>
        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DashboardButton />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar;