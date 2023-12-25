import { Link, NavLink } from "react-router-dom";
import {
  MenuOutlined,
  BulbOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  HomeOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="p-4 flex items-center gap-4 flex-row justify-between lg:items-start lg:flex-col ">
      <Link to="/" className="flex items-center gap-2">
        <img
          src="https://i.ibb.co/Z11pcGG/cryptocurrency.png"
          className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]"
          alt="logo"
        />
        <span className="font-bold text-white text-2xl md:text-4xl">
          Cryptoverse
        </span>
      </Link>
      <ul className="hidden mt-4 w-full lg:block">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `link ${isActive ? "bg-white text-blue-700" : ""}`
          }
        >
          <HomeOutlined />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/cryptocurrencies"
          className={({ isActive }) =>
            `link ${isActive ? "bg-white text-blue-700" : ""}`
          }
        >
          <FundOutlined />
          <span>Cryptocurrencies</span>
        </NavLink>
        <NavLink
          to="/exchanges"
          className={({ isActive }) =>
            `link ${isActive ? "bg-white text-blue-700" : ""}`
          }
        >
          <MoneyCollectOutlined />
          <span>Exchanges</span>
        </NavLink>

        <NavLink
          to="/news"
          className={({ isActive }) =>
            `link ${isActive ? "bg-white text-blue-700" : ""}`
          }
        >
          <BulbOutlined />
          <span>News</span>
        </NavLink>
      </ul>
      {show ? (
        <>
          <button
            onClick={() => setShow(false)}
            className="inline lg:hidden  text-white text-2xl"
          >
            <CloseOutlined />
          </button>
          <ul className="mobile-nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `link  justify-center ${
                  isActive ? "bg-white text-blue-700" : ""
                }`
              }
            >
              <HomeOutlined />
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/cryptocurrencies"
              className={({ isActive }) =>
                `link justify-center ${
                  isActive ? "bg-white text-blue-700" : ""
                }`
              }
            >
              <FundOutlined />
              <span>Cryptocurrencies</span>
            </NavLink>
            <NavLink
              to="/exchanges"
              className={({ isActive }) =>
                `link justify-center ${
                  isActive ? "bg-white text-blue-700" : ""
                }`
              }
            >
              <MoneyCollectOutlined />
              <span>Exchanges</span>
            </NavLink>

            <NavLink
              to="/news"
              className={({ isActive }) =>
                `link justify-center mb-0 ${
                  isActive ? "bg-white text-blue-700" : ""
                }`
              }
            >
              <BulbOutlined />
              <span>News</span>
            </NavLink>
          </ul>
        </>
      ) : (
        <button
          onClick={() => setShow(true)}
          className="inline lg:hidden  text-white text-2xl"
        >
          <MenuOutlined />
        </button>
      )}
    </div>
  );
};

export default Navbar;
