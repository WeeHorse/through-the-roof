import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import UserLogin from "./components/UserLogin";

function App() {

  return (
    <GlobalProvider>
      <Router>
        <Header />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<UserLogin />} />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;

