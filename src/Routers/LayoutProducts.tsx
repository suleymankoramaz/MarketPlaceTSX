import { Routes, Route, BrowserRouter} from "react-router-dom"
import ProductsPage from "../Pages/ProductsPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage";

const LayoutProducts = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default LayoutProducts;