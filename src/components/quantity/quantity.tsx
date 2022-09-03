import { useCallback } from 'react';
import ChevronUp from '@assets/icons/chevron-up.svg';
import ChevronDown from '@assets/icons/chevron-down.svg';
import useCart from '@hooks/useCart';
import { Product } from '@types';
import styles from './quantity.module.css';

const Quantity = ({ product }: Props) => {
  const { items, updateItem } = useCart();
  const { id, variants } = product;
  const variant = variants[0].id;

  const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateItem({ product_id: id, quantity: Number(e.target.value), variant_id: variant });
  };

  const raiseQuantity = () => {
    const quantity = items[id] ? items[id].quantity + 1 : 1;
    updateItem({ product_id: id, quantity, variant_id: variant });
  };

  const lowerQuantity = () => {
    const quantity = items[id] ? items[id].quantity - 1 : 0;
    updateItem({ product_id: id, quantity, variant_id: variant });
  };

  const getQuantityValue = useCallback(() => (items[id] ? items[id].quantity : 0), [items, id]);

  return (
    <label className={styles.quantity} htmlFor="quantity">
      Quantity
      <button onClick={lowerQuantity} type="button">
        <ChevronDown />
      </button>
      <input
        id={`quantity_${id}`}
        onChange={onQuantityChange}
        type="number"
        value={getQuantityValue()}
      />
      <button onClick={raiseQuantity} type="button">
        <ChevronUp />
      </button>
    </label>
  );
};

export default Quantity;

type Props = {
  product: Product;
};
