import { FaWhatsapp, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="h-full w-full text-white bg-[#0A090D] gap-10 divide-y divide-gray-600 border-t-2 border-gray-500">
      {/* <div className="h-full">
        <div className="flex flex-col items-center justify-center space-y-4 py-8">
          <div className="flex space-x-6">
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} />
            </a>
          </div>
          <nav className="flex space-x-6">
            <a
              href="/"
              className="ml-1 font-semibold text-gray-600 hover:text-white transition-colors duration-100 cursor-pointer"
            >
              Home
            </a>
            <a
              href="/product"
              className="ml-1 font-semibold text-gray-600 hover:text-white transition-colors duration-100 cursor-pointer"
            >
              Produk
            </a>
            <a
              href="/mitra"
              className="ml-1 font-semibold text-gray-600 hover:text-white transition-colors duration-100 cursor-pointer"
            >
              Mitra
            </a>
          </nav>
        </div>
      </div> */}

      <div className="w-full text-center pt-5 pb-2 inter">
        <span className="text-sm">
          © 2024 DurianBawor Ltd. | All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
