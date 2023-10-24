import { product } from '../constants';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  className: string;
  amount: number;
}

export function ProductList({ className, amount }: ProductListProps) {
  const productsList = new Array(amount)
    .fill(product)
    .map(() => ({ ...product }));
  return (
    <div className={className}>
      {productsList.map((item, index) => (
        <ProductCard key={index} info={item} />
      ))}
    </div>
  );
}
