import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#222] p-4 text-white flex justify-between flex-col lg:flex-row gap-4">
      <div>
        <p className="flex items-center gap-1">
          <img
            src="https://i.ibb.co/Z11pcGG/cryptocurrency.png"
            className="w-10 h-10"
            alt=""
          />
          <span className="text-2xl font-semibold "> Cryptoverse</span>
        </p>
        <p className="mt-4"> All rights reserved &copy; 2023</p>
      </div>
      <ul className="text-lg">
        <p className="text-2xl font-semibold mb-4">Links</p>
        <li>
          <Link to="/"  
          className="mb-4 block hover:text-blue-700 transition">Home</Link>
        </li>

        <li>
          <Link to="/cryptocurrencies" 
          className="mb-4 block hover:text-blue-700 transition">Cryptocurrencies</Link>
        </li>
        <li>
          <Link to="/exchanges" 
          className="mb-4 block hover:text-blue-700 transition">Exchanges</Link>
        </li>
        <li>
          <Link to="/news" 
          className="mb-4 block hover:text-blue-700 transition">News</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
