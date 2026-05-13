import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, description: string, price: number): Product {
    const newProduct = new Product(
      new Date().toString(),
      title,
      description,
      price,
    );
    this.products.push(newProduct);
    return newProduct;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(productId: string) {
    const product = this.products.find((prod) => prod.id === productId);
    if (!product) {
      throw new NotFoundException('coudlnt find product.');
    }
    return { ...product };
  }
}
