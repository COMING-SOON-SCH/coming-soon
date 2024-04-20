const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">COMING SOON</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-300">
            ABOUT
          </a>
          <a href="#" className="hover:text-gray-300">
            MEMBER
          </a>
          <a href="#" className="hover:text-gray-300">
            TRACKS
          </a>
          <a href="#" className="hover:text-gray-300">
            ACTIVITY
          </a>
          <a href="#" className="hover:text-gray-300">
            PROJECT
          </a>
          <a href="#" className="hover:text-gray-300">
            RECRUIT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
