import { Routes, Route } from "react-router-dom";
import { Footer, CryptoDetails, Cryptocurrencies, News } from "./components";
import { Sidebar, Home, Exchanges } from "./pages";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);
function App() {
  return (
    <section className="mainContent relative">
      <section>
        <Sidebar />
      </section>
      <section className="h-[92vh] lg:h-full bg-blue-50 overflow-y-auto">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/crypto/:coinId" element={<CryptoDetails />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </section>
    </section>
  );
}

export default App;
