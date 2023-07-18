"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session, status, update } = useSession();
  const pathname = usePathname();
  if (pathname === "/register" || pathname === "/login") return null;

  const router = useRouter();

  const handleSignout = () => {
    signOut({
      redirect: false, // optional, but recommended in most cases to prevent page refreshes after signing
    });
    router.push("/");
  };
  return (
    <div className="top-0 left-0 w-full z-50 bg-white border-b backdrop-blur-lg bg-opacity-80">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 justify-between">
          <div className="flex flex-1 gap-5 items-stretch justify-start">
            <Link className="flex flex-shrink-0 items-center" href="/">
              <Image
                className="block h-12 w-auto"
                width={48}
                height={48}
                src="https://www.svgrepo.com/show/501888/donut.svg"
                alt="logo"
              />
            </Link>
            {session?.user && status === "authenticated" && (
              <Link
                className="flex flex-shrink-0 items-center"
                href="/dashboard"
              >
                Dashboard
              </Link>
            )}
          </div>
          <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
            {session?.user && status === "authenticated" ? (
              <button
                onClick={handleSignout}
                className="text-gray-800 bg-indigo-100 hover:bg-indigo-200 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link
                  className="text-gray-700 hover:text-indigo-700 text-sm font-medium"
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  className="text-gray-800 bg-indigo-100 hover:bg-indigo-200 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
                  href="/register"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
