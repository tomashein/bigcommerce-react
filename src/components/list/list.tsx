import Card from '@components/card';
import { Product } from '@types';
import styles from './list.module.css';

const List = ({ products }: Props) => {
  return (
    <div className={styles.list}>
      {products.length > 0 ? (
        products.map((product) => <Card key={product.id} product={product} />)
      ) : (
        <span className={styles.not_found}>No result found.</span>
      )}
    </div>
  );
};

export default List;

type Props = {
  products: Product[];
};
