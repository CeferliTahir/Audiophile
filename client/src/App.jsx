import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import HomePage from "./pages/HomePage";
import ProductsListPage from "./pages/ProductsListPage";
import ProductsDetailsPage from "./pages/ProductsDetailsPage";
import Footer from "./components/common/Footer";
import NotFound from "./components/common/NotFound";
import ScrollToTop from "./helpers/ScrollToTop";
import CheckOutPage from "./pages/CheckOutPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:category" element={<ProductsListPage />} />
        <Route
          path="/products/:category/:name"
          element={<ProductsDetailsPage />}
        />
        <Route path="/check-out" element={<CheckOutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
