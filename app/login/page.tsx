import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={() => signIn("github", { callbackUrl: "/" })}
        className="bg-blue-500 text-white p-4 rounded"
      >
        Sign in with GitHub
      </button>
    </div>
  );
};

export default LoginPage;
