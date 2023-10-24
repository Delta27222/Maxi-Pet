import { product } from '../../constants';
import { ProductCard } from '..';

export const ProducList = ({ className, amount }) => {
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
};
