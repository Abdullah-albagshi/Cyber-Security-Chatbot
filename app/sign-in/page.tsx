import LandingPage from '@/components/ui/LandingPage'
import { LoginButton } from '@/components/login-button'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function SignInPage() {
  const session = await auth()
  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4 py-16 space-y-8">
      <LandingPage/>
    </div>
  )
}
