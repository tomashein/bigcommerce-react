/* eslint-disable no-console */
import { useCallback, useEffect, useState } from 'react';
import { get } from '@helpers/fetch';
import { PaginatedResponse, Product, Query, RawProduct } from '@types';

const useProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState<Query>({ limit: 4, page: 1, include: 'images,variants' });
  const [pages, setPages] = useState(0);

  const getProducts = useCallback(() => {
    setLoading(true);
    get<PaginatedResponse<RawProduct>>('/catalog/products', query)
      .then((res) => {
        const reduced = res.data.reduce<Product[]>(
          (acc, product) => [
            ...acc,
            {
              id: product.id,
              name: product.name,
              sku: product.sku,
              images: product.images,
              variants: product.variants
            }
          ],
          []
        );
        setProducts(reduced);
        setPages(res.meta.pagination.total_pages);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [query]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return { products, pages, query, loading, setQuery };
};

export default useProducts;
