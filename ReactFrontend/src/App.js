import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import AuctionSellingPage from "./components/AuctionSellingPage";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/makeauction" element={<AuctionSellingPage />} />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
