'use client'
import * as React from 'react'
import Link from 'next/link'

import { NavItem } from '@/types/nav'
import { siteConfig } from '@/components/config/site'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { CgLogo } from '@/components/cg-logo'
import { MenuIcon, X } from 'lucide-react'
import { buttonVariants } from './ui/button'
import { ModeToggle } from './mode-toggle'

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [isSideMenuOpen, setMenu] = React.useState(false)
  return (
    <main>
      <nav className='flex justify-between w-full px-10 items-center py-6'>
        {/* main nav-items */}
        <div className='flex items-center gap-8'>
          <section className='flex items-center gap-4'>
            <Link href={'/'} className=''>
              <CgLogo />
            </Link>
          </section>
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className='hidden lg:block text-gray-400 hover:text-white'
                >
                  {item.title}
                </Link>
              )
          )}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={cn(
            'fixed mt-20 h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-all',
            isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
          style={{ transitionDuration: '0.3s' }}
        >
          <section className='flex flex-col absolute right-0 top-0 h-screen p-8 gap-8 z-50 w-full text-white bg-background'>
            <X onClick={() => setMenu(false)} />
            <div className='flex flex-col items-center gap-y-4'>
              {items?.map(
                (item, index) =>
                  item.href && (
                    <Link key={index} href={item.href} onClick={() => setMenu(false)}>
                      {item.title}
                    </Link>
                  )
              )}
            </div>
          </section>
        </div>

        {/* last section */}
        <section className=''>
          <div className='flex flex-1 items-center justify-end space-x-4'>
            <nav className='hidden md:block'>
              <div className={cn('flex items-center text-sm font-medium gap-2', '')}>
                <ModeToggle />
                <Link href={siteConfig.links.twitter} target='_blank' rel='noreferrer'>
                  <div
                    className={buttonVariants({
                      size: 'icon',
                      variant: 'ghost'
                    })}
                  >
                    𝕏
                    <span className='sr-only'>Twitter</span>
                  </div>
                </Link>
                <Link href={siteConfig.links.github} target='_blank' rel='noreferrer'>
                  <div
                    className={buttonVariants({
                      size: 'icon',
                      variant: 'ghost'
                    })}
                  >
                    <Icons.gitHub className='h-5 w-5' />
                    <span className='sr-only'>GitHub</span>
                  </div>
                </Link>
                <Link href='/auth' target='' rel='noreferrer'>
                  <div className='p-2 mx-2'>Login</div>
                  <span className='sr-only'>Login</span>
                </Link>
                <Link href='/auth' target='' rel='noreferrer'>
                  <div className='bg-[#CC559A] py-2 px-4 rounded-sm'>SignUp</div>
                  <span className='sr-only'>SignUp</span>
                </Link>
              </div>
            </nav>
            <MenuIcon
              onClick={() => setMenu(true)}
              className='text-3xl cursor-pointer lg:hidden '
            />
          </div>
        </section>
      </nav>
    </main>
  )
}
