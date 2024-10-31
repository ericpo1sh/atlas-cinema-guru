import react from 'react'
import { signIn } from "@/auth"
import github_logo from "@/assets/github.png";

const SignInButton: React.FC = () => {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github", { redirectTo: "/" })
      }}
    >
      <button type="submit" className="outline outline-2 outline-gray-300 rounded-lg bg-white p-3 flex justify-between gap-3 hover:outline-4 w-72"><p className='text-lg'>Sign in with Github</p><img className='w-8' src={github_logo.src}></img></button>
    </form>
  )
}

export default SignInButton;
