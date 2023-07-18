"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";

const ClientUserCard = () => {
  const { data: session, status, update } = useSession();
  return (
    <div className="py-8 px-8 max-w-sm mx-auto mt-10 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <Image
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        width={96}
        height={96}
        src={
          session?.user?.image ||
          "https://tailwindcss.com/img/erin-lindford.jpg"
        }
        alt="Woman's Face"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">
            {session?.user?.name || "John Dae"}
          </p>
          <p className="text-slate-500 font-medium">
            {session?.user?.email || "admin@example.com"}
          </p>
        </div>
        <p className="px-4 py-1 text-sm text-purple-600 font-semibold">
          {session?.user?.role || "USER or ADMIN"}
        </p>
      </div>
    </div>
  );
};

export default ClientUserCard;
