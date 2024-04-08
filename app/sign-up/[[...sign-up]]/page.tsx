import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <div className="bg-black w-screen min-h-screen flex justify-center items-center">
      <SignUp />
    </div>
  )
}

export default SignUpPage
