import { observer } from 'mobx-react-lite';
import ProductDetails from '../Components/ProductDetails';
import productStore from '../Stores/ProductStore';
import { ProductType } from '../Stores/ProductStore';

const ProductDetailsPage = () => {
  const product:ProductType = productStore.selectedProduct;
  
  return (
    <div className="product-detail-page">
      <ProductDetails key = {product.id}/>
    </div>
  );
};

export default observer(ProductDetailsPage);
