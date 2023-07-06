"use server";
import Link from "next/link";
import AccountMenu from "../ui/AccountMenu";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import ThemeToggle from "../ui/ThemeToggle";

const NavBar = async () => {
  const session = await getServerSession(authOption);
  return (
    <div className="navbar bg-base-300 text-gray-900 border-b-[0.5px] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost font-bold normal-case text-xl">
          Khaled App
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="hidden sm:flex gap-10 font-semibold items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/secret">Secret</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-4">
        <ul className="flex gap-5 font-semibold items-center">
          <ThemeToggle />
          <li>
            {session ? (
              <>
                <AccountMenu
                  name={session?.user?.name}
                  email={session?.user?.email}
                  image={session?.user?.image}
                />
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="border font-semibold border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-slate-50  dark:border-gray-100 dark:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-900 text-xs rounded-md uppercase  px-3 py-2"
                >
                  Sign In
                </Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
