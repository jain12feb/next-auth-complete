import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto mt-12 px-4 text-center">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mt-2 mb-6">
          NEXT-AUTH
          <br />
          Authentication for Next.js
        </h1>
        <p className="px-4 leading-relaxed">
          with Google, Github and
          <br />
          User Credentials.
        </p>
        <p className="mb-8 mt-4 px-4 leading-relaxed">
          Oh, and the best bit...
          <span className="text-pink-600 font-bold">It's free!</span>
        </p>
        <div>
          <Link
            className="inline-block py-4 px-8 leading-none text-white bg-slate-800 hover:bg-pink-600 rounded shadow text-sm font-bold"
            href="/register"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
