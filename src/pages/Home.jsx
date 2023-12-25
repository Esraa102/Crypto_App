import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, Loader, News } from "../components";
const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return <Loader />;

  return (
    <section className="p-4">
      <h2 className="mainHead">Global Crypto Stats</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <p className="text-xl text-[#c4c4c4]">Total Cryptocurrencies</p>
          <p className="mt-2 text-3xl font-bold text-blue-900">
            {millify(globalStats?.total)
              .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
                return d.charCodeAt(0) - 1632;
              })
              .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
                return d.charCodeAt(0) - 1776;
              })}
          </p>
        </div>
        <div>
          <p className="text-xl text-[#c4c4c4]">Total Exchanges</p>
          <p className="mt-2 text-3xl font-bold text-blue-900">
            {millify(globalStats?.totalExchanges)
              .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
                return d.charCodeAt(0) - 1632;
              })
              .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
                return d.charCodeAt(0) - 1776;
              })}
          </p>
        </div>
        <div>
          <p className="text-xl text-[#c4c4c4]">Total Market Cap</p>
          <p className="mt-2 text-3xl font-bold text-blue-900">
            {millify(globalStats?.totalMarketCap)
              .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
                return d.charCodeAt(0) - 1632;
              })
              .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
                return d.charCodeAt(0) - 1776;
              })}
          </p>
        </div>
        <div>
          <p className="text-xl text-[#c4c4c4]">Total 24h Volume</p>
          <p className="mt-2 text-3xl font-bold text-blue-900">
            {millify(globalStats?.total24hVolume)
              .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
                return d.charCodeAt(0) - 1632;
              })
              .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
                return d.charCodeAt(0) - 1776;
              })}
          </p>
        </div>
        <div>
          <p className="text-xl text-[#c4c4c4]">Total Markets</p>
          <p lang="en" className="mt-2 text-3xl font-bold text-blue-900">
            {millify(globalStats?.totalMarkets)
              .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
                return d.charCodeAt(0) - 1632;
              })
              .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
                return d.charCodeAt(0) - 1776;
              })}
          </p>
        </div>
      </div>
      <div className="mt-16 mb-8 flex items-center flex-wrap gap-4 justify-between">
        <h2 className="mainHead">Top 10 Cryptocurrencies In The World</h2>
        <h3 className="showLink">
          <Link to="/cryptocurrencies">Show More</Link>
        </h3>
      </div>
      <Cryptocurrencies smiplified />
      <div className="mt-16 mb-8 flex items-center justify-between">
        <h2 className="mainHead">Latest Crypot News</h2>
        <h3 className="showLink">
          <Link to="/news">Show More</Link>
        </h3>
      </div>
      <News smiplified />
    </section>
  );
};

export default Home;
