// @ts-ignore 
import * as React from 'react'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { UserMenu } from '@/components/user-menu'
import { auth } from '@/auth'

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

async function Links() {
  const session = await auth()
  return (
    <>
      <div className="flex items-center">
        {session?.user ? (
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
        ) : (
          <></>
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
      <Links />
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
