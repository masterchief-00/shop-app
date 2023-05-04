import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductListing } from "./components/ProductListing";
import { ProductDetails } from "./components/ProductDetails";
import { Provider } from "react-redux";
import store from "./redux";
import { ProductAdd } from "./components/ProductAdd";
import { ProductUpdate } from "./components/productUpdate";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/product/add" element={<ProductAdd />} />
            <Route path="/product/:id/update" element={<ProductUpdate />} />
            <Route>404, page not found</Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
