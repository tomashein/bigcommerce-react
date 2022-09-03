import { useEffect, useState } from 'react';
import Button from '@components/button';
import Filter from '@components/filter';
import List from '@components/list';
import Loader from '@components/loader';
import Pagination from '@components/pagination';
import CartProvider from '@context/cart';
import GalleryProvider from '@context/gallery';
import useProducts from '@hooks/useProducts';
import styles from './app.module.css';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const { products, pages, query, loading, setQuery } = useProducts();

  useEffect(() => {
    if (!loading && !loaded) {
      setLoaded(true);
    }
  }, [loaded, loading]);

  return loaded ? (
    <aside className={styles.app}>
      <Filter setFilter={setQuery} />
      <CartProvider>
        <GalleryProvider>
          <List products={products} />
        </GalleryProvider>
        <div className={styles.actions}>
          {pages > 1 ? (
            <Pagination current={query.page} total={pages} setPage={setQuery} />
          ) : (
            <div />
          )}
          <Button>Create Cart</Button>
        </div>
      </CartProvider>
    </aside>
  ) : (
    <Loader />
  );
};

export default App;
