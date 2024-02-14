const Footer = () => {
  return (
    <footer className="bg-cyan-300 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <p className="text-sm">&copy; 2024 kamrul</p>
        </div>
        <div className="flex gap-4">
          <a
            href="/"
            className="hover:text-white transition duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="/"
            className="hover:text-white transition duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="/"
            className="hover:text-white transition duration-300 ease-in-out"
          >
            Services
          </a>
          <a
            href="/"
            className="hover:text-white transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
