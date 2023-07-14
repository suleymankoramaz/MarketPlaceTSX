import { makeAutoObservable } from 'mobx';

export interface ProductType {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[]
}

const defaultProduct: ProductType = {
  id: 0,
  title: '',
  description: '',
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: '',
  category: '',
  thumbnail: '',
  images: [],
};

class ProductStore {
  products:ProductType[] = [];
  selectedProduct:ProductType = defaultProduct;

  constructor() {
    makeAutoObservable(this);
  }

  setProducts(products:ProductType[]) {
    this.products = products;
  }

  setSelectedProduct(product:ProductType) {
    this.selectedProduct = product;
  }
}

const productStore = new ProductStore();
export default productStore;