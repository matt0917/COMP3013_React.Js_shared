import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background shadow">
      <Link href="/" className="text-lg font-bold" prefetch={false}>
        JSPNote
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/login" className="text-sm font-medium font-extrabold text-blue-700 hover:underline" prefetch={false}>
          Login
        </Link>
        <Link
          href="/signup"
          className="inline-flex items-center justify-center rounded-md bg-pink-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          prefetch={false}
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
