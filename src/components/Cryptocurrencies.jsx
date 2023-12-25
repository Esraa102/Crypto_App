import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useState, useEffect } from "react";
import { Loader } from "./index";
// eslint-disable-next-line react/prop-types
const Cryptocurrencies = ({ smiplified }) => {
  const count = smiplified ? 10 : 50;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [searchTerm, cryptoList]);
  if (isFetching) return <Loader />;

  return (
    <div className="p-4">
      {!smiplified && (
        <div className="mb-8">
          <input
            className="p-2 mx-auto block w-[200px] lg:w-[350px] border-4 focus:outline-none focus:border-blue-300"
            type="search"
            placeholder="Search Cryptocurrecny..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cryptos?.map((item) => (
          <div
            key={item.uuid}
            className="p-4 border hover:shadow-lg transition bg-white"
          >
            <Link to={`/crypto/${item.uuid}`}>
              <div className="flex pb-2 mb-4 items-center border-b justify-between ">
                <p className="text-xl font-bold">
                  {item.rank}.{item.name}
                </p>
                <img
                  className="w-[50px] h-[50px] object-cover"
                  src={item.iconUrl}
                  alt="icon image"
                />
              </div>
              <p className="mb-2 text-lg">
                Price:{" "}
                {millify(item.price)
                  .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
                    return d.charCodeAt(0) - 1632;
                  })
                  .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
                    return d.charCodeAt(0) - 1776;
                  })}
              </p>
              <p className="mb-2 text-lg">
                Market Cap:{" "}
                {millify(item.marketCap)
                  .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
                    return d.charCodeAt(0) - 1632;
                  })
                  .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
                    return d.charCodeAt(0) - 1776;
                  })}
              </p>
              <p className="mb-2 text-lg">
                Daily Change:{" "}
                {millify(item.change)
                  .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
                    return d.charCodeAt(0) - 1632;
                  })
                  .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
                    return d.charCodeAt(0) - 1776;
                  })}
                %
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cryptocurrencies;
