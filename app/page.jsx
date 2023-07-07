import Link from "next/link";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="min-[400px]:text-5xl text-2xl font-black">
        Wake up to reality
      </h1>
      <div className="">
        <ul className="steps steps-vertical">
          <li className="step step-neutral">
            <ul className="flex gap-1">
              <li>Sign in to your account</li>
              <li>
                <Link
                  className="font-semibold text-emerald-500 text-base"
                  href={"/signin"}
                >
                  Here
                </Link>
              </li>
            </ul>
          </li>
          <li className="step step-neutral">Explore the features</li>
          <li className="step step-neutral">
            <ul className="flex gap-1">
              <li>Create your first post</li>
              <li>
                <Link
                  className="font-semibold text-emerald-500 text-base"
                  href={"/blog"}
                >
                  Here
                </Link>
              </li>
            </ul>
          </li>
          <li className="step step-neutral">Rate me :)</li>
          <li className="step step-neutral">Enjoy your life</li>
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
}
