import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'

const SignUpPage = () => {
  return (
    <div className="bg-black w-screen min-h-screen flex flex-col justify-center items-center">
      <SignIn />
      <Link className="mt-6" href="/">
        Return to the main page
      </Link>
    </div>
  )
}

export default SignUpPage
