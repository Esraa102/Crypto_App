import millify from "millify";
import { useGetCryptosExchangesQuery } from "../services/cryptoApi";
import { Loader } from "../components";
import { Link } from "react-router-dom";
const Exchanges = () => {
  const { data, isFetching } = useGetCryptosExchangesQuery();
  console.log(data?.data?.coins);

  if (isFetching) return <Loader />;
  return (
    <div className="py-6 px-4">
      <div className="w-full overflow-x-auto">
        <table className=" text-sm lg:text-xl font-bold border-collapse overflow-x-auto w-full border p-4">
          <thead>
            <tr className="w-full bg-blue-700 text-white">
              <th>Exchanges</th>
              <th>24h Volume</th>
              <th>Markets</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.coins.map((coin, index) => (
              <tr
                key={index}
                className="hover:bg-white hover:shadow-lg cursor-pointer transition"
              >
                <td>
                  <Link to={`/crypto/${coin.uuid}`} className="flex gap-2">
                    <p className="mt-1">{coin.rank}. </p>
                    <div className="flex items-center gap-2">
                      <img
                        src={coin.iconUrl}
                        className="w-[50px] h-[50px] object-cover"
                        alt="coin image"
                      />
                      <span>{coin.name}</span>
                    </div>
                  </Link>
                </td>
                <td className="text-center">
                  {millify(coin["24hVolume"])
                    .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
                      return d.charCodeAt(0) - 1632;
                    })
                    .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
                      return d.charCodeAt(0) - 1776;
                    })}
                </td>
                <td className="text-center">
                  {millify(coin.numberOfMarkets)
                    .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
                      return d.charCodeAt(0) - 1632;
                    })
                    .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
                      return d.charCodeAt(0) - 1776;
                    })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exchanges;
