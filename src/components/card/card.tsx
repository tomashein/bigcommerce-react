import Quantity from '@components/quantity';
import useGallery from '@hooks/useGallery';
import { Product } from '@types';
import styles from './card.module.css';

const Card = ({ product }: Props) => {
  const { showGallery } = useGallery();
  const thumbnail = product.images.find((img) => img.is_thumbnail);

  return (
    <article className={styles.card}>
      {thumbnail ? (
        <button onClick={showGallery(product.name, product.images)} type="button">
          <img alt={product.name} src={thumbnail.url_thumbnail} />
        </button>
      ) : (
        <div className={styles.no_thumbnail} />
      )}
      <h1>{product.name}</h1>
      <p>SKU: {product.sku}</p>
      <Quantity product={product} />
    </article>
  );
};

export default Card;

type Props = {
  product: Product;
};
