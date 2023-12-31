import * as React from 'react'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  IconGitHub,
  IconNextChat,
  IconSeparator,
  IconVercel
} from '@/components/ui/icons'

import { ChatHistory } from './chat-history'
import { ClearHistory } from '@/components/clear-history'
import Link from 'next/link'
// import OpenChatBar from './OpenChatBar'
import { Sidebar } from '@/components/sidebar'
import { SidebarFooter } from '@/components/sidebar-footer'
import { SidebarList } from '@/components/sidebar-list'
import { SidebarMobile } from './sidebar-mobile'
import { SidebarToggle } from './sidebar-toggle'
import { ThemeToggle } from '@/components/theme-toggle'
import { UserMenu } from '@/components/user-menu'
import { auth } from '@/auth'
import { clearChats } from '@/app/actions'
import { cn } from '@/lib/utils'

async function UserOrLogin() {
  const session = await auth()
  return (
    <>
      <div className="flex items-center">
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <Button variant="link" asChild className="-ml-2">
            <Link href="/sign-in?callbackUrl=/">Login</Link>
          </Button>
        )}
      </div>
    </>
  )
}



export function Header() {
  return (<>
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <Link href="/" rel="nofollow">
        <img src="https://seeklogo.com/images/C/cyber-security-logo-D84A24E3F8-seeklogo.com.png" className="h-[50px] mr-2" />
        {/* <IconNextChat className="w-6 h-6 mr-2 dark:hidden" inverted ur/>
          <IconNextChat className="hidden w-6 h-6 mr-2 dark:block" /> */}
      </Link>
      {/* links at the beginning */}
      <div className="flex items-center space-x-2">
        {/* chat */}
        <Link href="/">
          <Button variant="outline" className="ml-2">
            Chat
          </Button>
        </Link>

        {/* password-generator */}
        <Link href="/password-generator">
          <Button variant="outline" className="ml-2">
            Password Generator
          </Button>
        </Link>
      </div>
      <div className="flex items-center  space-x-2 ">
        <div className="flex items-center">
          <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
            <UserOrLogin />
          </React.Suspense>
        </div>
      </div>
    </header>
  </>
  )
}
