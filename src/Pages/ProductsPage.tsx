import { useEffect } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import ProductCard from '../Components/ProductCard';
import productStore from '../Stores/ProductStore';
//import { ProductType } from '../Stores/ProductStore';
import './ProductsPage.css'

const ProductsPage = () => {
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        const products = response.data.products;
        productStore.setProducts(products);
      })
      .catch((error) => {
        // Handle error here
        console.error('Error fetching products:', error);
      });
  }, []);

  

  return (
    <>
      <h1>MARKET PLACE</h1>
      <div className='container'>
        {productStore.products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>  
    </>
  );
};

export default observer(ProductsPage); 