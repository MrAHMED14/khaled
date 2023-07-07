"use client";
import { GithubBtn, GoogleBtn, TwitterBtn } from "../components/ui/LoginBtns";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInPage = ({ searchParams: { callbackUrl } }) => {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    router.push("/");
    return;
  }
  return (
    <div className="container flex justify-center items-center">
      <div className="card justify-center items-center w-96 text-gray-950 bg-base-100 shadow-xl">
        <div className="card-body items-center gap-7">
          <h2 className="card-title max-[400px]:text-base">
            Sign in with your account
          </h2>
          <div className="flex flex-col w-full items-center gap-3">
            <GoogleBtn callbackUrl={callbackUrl || "/"} />
            <GithubBtn callbackUrl={callbackUrl || "/"} />
            <TwitterBtn callbackUrl={callbackUrl || "/"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignInPage;
