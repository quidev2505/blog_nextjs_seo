import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="shadow p-3 mb-10">
      <Link
        href="/"
        className="flex items-center gap-3 justify-center w-max m-auto"
      >
        <h2 className="text-2xl md:text-6xl font-semibold text-black-600 border rounded-lg p-5 bg-blue-400 text-white">
          BLOG LATEST NEWS
        </h2>
      </Link>
      <div className="flex gap-5 mt-2 justify-end">
        <Link href="/">
          <div className="p-4 rounded-lg shadow-md font-bold cursor-pointer bg-red-400 text-white">
            Home
          </div>
        </Link>
        <Link href="/about">
          <div className="p-4 rounded-lg shadow-md font-bold cursor-pointer bg-red-400 text-white">
            About
          </div>
        </Link>
      </div>
    </div>
  );
}
