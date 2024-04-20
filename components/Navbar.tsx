import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-lg font-bold">COMING SOON</div>
        </Link>
        <div className="space-x-4">
          <Link href="#" className="hover:text-gray-300">
            ABOUT
          </Link>
          <Link href="/members" className="hover:text-gray-300">
            MEMBER
          </Link>
          <Link href="/track" className="hover:text-gray-300">
            TRACK
          </Link>
          <Link href="/activity" className="hover:text-gray-300">
            ACTIVITY
          </Link>
          <Link href="#" className="hover:text-gray-300">
            PROJECT
          </Link>
          <Link href="#" className="hover:text-gray-300">
            RECRUIT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
