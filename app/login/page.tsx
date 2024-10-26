// app/login/page.tsx

import { signIn } from "next-auth/react";

export default function Login() {
  const handleLogin = async () => {
    await signIn("github"); // Initiates the GitHub login process
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleLogin}
        className="bg-[#1ED2AF] text-white px-4 py-2 rounded"
      >
        Login with GitHub
      </button>
    </div>
  );
}
