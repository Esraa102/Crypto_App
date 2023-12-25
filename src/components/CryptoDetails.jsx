import millify from "millify";
import { useParams } from "react-router";
import { useState } from "react";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { LineChart, Loader } from "./index";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });

  const cryptoDetails = data?.data?.coin;
  const time = ["7d", "3h", "24h", "30d", "1y", "3m", "3y", "5y"];
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${
        cryptoDetails?.price &&
        millify(cryptoDetails?.price)
          .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
            return d.charCodeAt(0) - 1632;
          })
          .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
            return d.charCodeAt(0) - 1776;
          })
      }`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${
        cryptoDetails
          ? millify(cryptoDetails["24hVolume"])
              .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
                return d.charCodeAt(0) - 1632;
              })
              .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
                return d.charCodeAt(0) - 1776;
              })
          : ""
      }`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap &&
        millify(cryptoDetails?.marketCap)
          .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
            return d.charCodeAt(0) - 1632;
          })
          .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
            return d.charCodeAt(0) - 1776;
          })
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
          .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
            return d.charCodeAt(0) - 1632;
          })
          .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
            return d.charCodeAt(0) - 1776;
          })
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total &&
        millify(cryptoDetails?.supply?.total)
          .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
            return d.charCodeAt(0) - 1632;
          })
          .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
            return d.charCodeAt(0) - 1776;
          })
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
          .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
            return d.charCodeAt(0) - 1632;
          })
          .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
            return d.charCodeAt(0) - 1776;
          })
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  if (isFetching) return <Loader />;
  return (
    <div className="p-4">
      <h2 className="text-4xl text-blue-700 text-center font-bold mb-8">
        {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
      </h2>
      <p className="text-center text-[#777] text-lg">
        {cryptoDetails?.name} live price in us dollars. View value statistiscs
        ,market cap and supply
      </p>
      <div>
        <label htmlFor="time-period" className="block text-lg mb-2">
          Select Time Period
        </label>
        <select
          id="time-period"
          className="p-2 cursor-pointer w-[200px]"
          onChange={(e) => setTimePeriod(e.target.value)}
        >
          {time.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {/* Line Chart */}
      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails?.price)
          .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
            return d.charCodeAt(0) - 1632;
          })
          .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
            return d.charCodeAt(0) - 1776;
          })}
        coinName={cryptoDetails?.name}
      />
      {/* Line Chart */}
      <div className=" my-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h3 className="text-2xl text-center text-blue-900 font-bold">
            {cryptoDetails?.name} Value Statistics
          </h3>
          <p className="my-4 text-center">
            An overview showing the statistics of {cryptoDetails?.name}, such as
            the base and quote currency, the rank, and trading volume.
          </p>
          <div className="mb-10">
            {stats.map(({ title, value, icon }) => (
              <div
                key={value}
                className="cursor-pointer hover:bg-white hover:shadow-md mx-auto py-4 px-3 flex items-center gap-3 flex-wrap justify-between text-lg font-semibold"
              >
                <div className="flex items-center gap-3">
                  <span>{icon}</span>
                  <span className="inline-block mt-2">{title}</span>
                </div>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl text-center text-blue-900 font-bold">
            Other Statistics
          </h3>
          <p className="mt-4 mb-8 text-center">
            An overview of showing the stats of all cryptocurrencies
          </p>
          <div className="mb-10">
            {genericStats.map(({ title, value, icon }) => (
              <div
                key={value}
                className="cursor-pointer hover:bg-white hover:shadow-md mx-auto py-4 px-3 flex items-center gap-3 flex-wrap justify-between text-lg font-semibold"
              >
                <div className="flex items-center gap-3">
                  <span>{icon}</span>
                  <span className="inline-block mt-2">{title}</span>
                </div>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-3xl text-blue-900 font-bold mb-4">
          What Is {cryptoDetails?.name}?
        </h3>
        <p className="text-lg">{cryptoDetails?.description}</p>
      </div>
      <div className="mb-10">
        <h3 className="text-3xl text-blue-900 font-bold mb-4">
          {cryptoDetails?.name} Links
        </h3>
        <div>
          {cryptoDetails?.links.map((item, index) => (
            <div
              key={index}
              className="flex items-center border-b-2 mb-2 justify-between px-2 py-6 cursor-pointer transition hover:bg-white hover:shadow-lg "
            >
              <h5 className="capitalize text-xl font-bold text-blue-700">
                {item.type}
              </h5>
              <div className="font-semibold">
                <span>Link: </span>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg hover:underline hover:text-blue-700 transition"
                >
                  {item.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
