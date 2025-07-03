import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AppsAndServices from "./pages/AppsAndServices";
import Learn from "./pages/Learn";
import ForBusiness from "./pages/ForBusiness";
import ForDevelopers from "./pages/ForDevelopers";
import Support from "./pages/Support";
import LedgerFile from "./components/LedgerFile";
import "./index.css";

function AppWrapper() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/ledger-file";

  return (
    <div className="App min-h-screen bg-white">
      {!hideHeaderFooter && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/apps-and-services" element={<AppsAndServices />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/for-business" element={<ForBusiness />} />
          <Route path="/for-developers" element={<ForDevelopers />} />
          <Route path="/support" element={<Support />} />
          <Route path="/ledger-file" element={<LedgerFile />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppWrapper />
      </Router>
    </Provider>
  );
}

export default App;
