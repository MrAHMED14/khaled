"use client";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const AccountMenu = ({ name, email, image }) => {
  return (
    <>
      <Menu as="div" className="relative z-[99]">
        <Menu.Button>
          <div className="relative h-8 w-8">
            {image ? (
              <div className="relative h-10 w-10">
                <Image
                  src={image}
                  alt={name}
                  className="inline-block rounded-full ring-[0.9px] 
                  ring-slate-950
                  ring-offset-4
                  ring-offset-base-300
                   dark:ring-slate-200 dark:ring-offset-slate-950"
                  fill
                />
              </div>
            ) : (
              <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-stone-100">
                <svg
                  className="h-full w-full text-stone-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
            )}
          </div>
        </Menu.Button>
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="bg-react w-72 max-w-[300x] sm:w-96 text-react absolute right-0 mt-1 flex origin-top-right flex-col rounded-xl py-6 text-white shadow-lg focus:outline-none bg-white">
            <div className="mb-4 flex gap-4 px-6 text-sm">
              <div className="relative h-10 w-10">
                <Image
                  src={image}
                  alt={name}
                  className="inline-block rounded-full"
                  fill
                />
              </div>
              <div>
                <p className="font-medium text-stone-600"> {name}</p>
                <p className="text-stone-400">{email}</p>
              </div>
            </div>
            <div className="sm:hidden flex flex-col">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/"
                    className={clsx(
                      active && "bg-stone-200",
                      "inline-flex items-center gap-6 px-[34px] py-2 text-sm text-stone-900"
                    )}
                  >
                    <span>Home</span>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/secret"
                    className={clsx(
                      active && "bg-stone-200",
                      "inline-flex items-center gap-6 px-[34px] py-2 text-sm text-stone-900"
                    )}
                  >
                    <span>Secret</span>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/blog"
                    className={clsx(
                      active && "bg-stone-200",
                      "inline-flex items-center gap-6 px-[34px] py-2 text-sm text-stone-900"
                    )}
                  >
                    <span>Blog</span>
                  </Link>
                )}
              </Menu.Item>
            </div>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/profile"
                  className={clsx(
                    active && "bg-stone-200",
                    "inline-flex items-center gap-6 px-[34px] py-2 text-sm text-stone-900"
                  )}
                >
                  <span>Manage Account</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={clsx(
                    active && "bg-stone-200",
                    "inline-flex items-center gap-6 px-[34px] py-2 text-sm text-stone-900"
                  )}
                  onClick={signOut}
                >
                  Sign Out
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};
export default AccountMenu;
