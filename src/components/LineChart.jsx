/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  for (let i = 0; i < coinHistory?.data?.history.length; i++) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };
  const options = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };
  return (
    <div className="mt-6 w-full">
      <div className="flex my-6 items-center gap-4 flex-wrap justify-between">
        <h3 className="text-3xl mb-6 font-bold text-blue-700">
          {coinName} Price Chart
        </h3>
        <div className="flex flex-col lg:flex-row gap-6">
          <p className="mb-2 text-xl font-semibold">
            {coinHistory?.data?.change}%
          </p>
          <p className="mb-2 text-xl font-semibold">
            Current {coinName} Price: ${currentPrice}
          </p>
        </div>
      </div>
      <div className="cursor-pointer">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
