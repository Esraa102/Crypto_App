import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import newsImg from "../../public/assets/22664977_NEWS.jpg";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";
// eslint-disable-next-line react/prop-types
const News = ({ smiplified }) => {
  const [newsCategory, setNewsCategory] = useState("cryptocurrencies");
  const { data } = useGetCryptosQuery(50);
  const count = smiplified ? 10 : 100;
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(
        `https://newsapi.org/v2/everything?q=${newsCategory}&pageSize=${count}&from=2023-11-24&apiKey=5cf0278312cc4c66815cae89690eae48`
      );
      setArticles(data?.articles);

      if (!data) return <Loader />;
    }
    getData();
  }, [count, newsCategory]);

  return (
    <div className="p-4">
      {!smiplified && <h1 className="mainHead">All Cryptocurrency News</h1>}
      {!smiplified && (
        <div className="mb-8">
          <label htmlFor="categories" className="text-lg block mb-4">
            Select News Category
          </label>
          <select
            id="categories"
            className="p-2 cursor-pointer"
            onChange={(e) => setNewsCategory(e.target.value.toLowerCase())}
          >
            <option value="cryptocurrencies">Cryptocurrencies</option>
            {data?.data?.coins.map((item) => (
              <option key={item.uuid}>{item?.name}</option>
            ))}
          </select>
        </div>
      )}
      <div className="grid grid-cols-1  lg:grid-cols-2 xxl:grid-cols-3 gap-6">
        {articles.map((item, index) => (
          <div key={index} className="newsCard">
            <img
              src={
                !item.urlToImage || item.urlToImage?.includes(".webp")
                  ? newsImg
                  : item.urlToImage
              }
              alt="image"
              className="w-full h-[300px] object-cover"
            />

            <h3 className="text-2xl px-4 font-semibold mt-4">{item.title}</h3>

            <p className="px-4 py-2 text-lg">
              {item?.content?.length <= 200
                ? item?.content
                : item?.content?.substring(0, 200)}
            </p>
            <p className="px-4 text-xl font-semibold">
              Source: {item?.source?.name}
            </p>
            <div className="flex  px-4 mt-4 items-center justify-between flex-wrap gap-4">
              <span className="text-[#777] text-sm">
                Published : {moment(item.publishedAt).startOf("ss").fromNow()}
              </span>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="detailsBtn"
              >
                See Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
