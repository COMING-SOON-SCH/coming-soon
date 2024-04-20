const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        {/* <div className="mb-2">
          <img src="/logo.png" alt="Logo" className="mx-auto h-8" />{" "}
        </div> */}
        <p className="text-sm">
          COPYRIGHT © {new Date().getFullYear()} COMING SOON. ALL RIGHTS
          RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
