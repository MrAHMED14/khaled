"use client";
import { signIn } from "next-auth/react";
const SignInBtn = ({ callbackUrl }) => {
  return (
    <div>
      <button
        onClick={() => signIn("google", { callbackUrl })}
        className="border rounded-lg border-slate-900 bg-slate-100 px-2 py-1 "
      >
        Continue with Google
      </button>
    </div>
  );
};
export default SignInBtn;
