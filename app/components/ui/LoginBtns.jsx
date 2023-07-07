"use client";

import { signIn } from "next-auth/react";
import { GithubIcon, GoogleIcon, TwitterIcon } from "./icons/ProvidersIcon";
import { useState } from "react";

export const GoogleBtn = ({ callbackUrl }) => {
  return (
    <>
      <button
        onClick={() => signIn("google", { callbackUrl })}
        className="btn  w-full px-2 py-3 "
      >
        <GoogleIcon width={24} height={24} />
        <span className="max-[400px]:hidden ">Continue with Google</span>
      </button>
    </>
  );
};

export const GithubBtn = ({ callbackUrl }) => {
  return (
    <>
      <button
        onClick={() => signIn("github", { callbackUrl })}
        className="btn w-full bg-stone-900 text-slate-50 hover:bg-stone-800 px-2 py-3"
      >
        <GithubIcon width={24} height={24} />
        <span className="pr-2 max-[400px]:hidden ">Continue with Github</span>
      </button>
    </>
  );
};

export const TwitterBtn = ({ callbackUrl }) => {
  const [comment, setComment] = useState("hidden");

  return (
    <>
      <button
        onClick={() => setComment("")}
        className="btn w-full text-slate-50 bg-[#00aced] hover:bg-[#1dcaff] px-2 py-3 "
      >
        <TwitterIcon width={24} height={24} />
        <span className="max-[400px]:hidden ">Continue with Twitter</span>
      </button>
      <p className={`${comment} text-red-500 text-xs font-bold`}>
        *Twitter is dead, use Google instead
      </p>
    </>
  );
};
