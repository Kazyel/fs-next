import { SignIn } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <div className="bg-black w-screen min-h-screen flex justify-center items-center">
      <SignIn />
    </div>
  )
}

export default SignUpPage
