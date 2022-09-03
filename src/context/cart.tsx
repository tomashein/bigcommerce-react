import { createContext, useCallback, useMemo, useState } from 'react';
import { post } from '@helpers/fetch';
import { Cart, CartItem, CartItemDictionary, ObjectResponse, PostCart } from '@types';

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<CartItemDictionary>({});

  const updateItem = useCallback((item: CartItem) => {
    if (item.quantity === 0) {
      setItems((prev) => {
        const state: CartItemDictionary = { ...prev };
        delete state[item.product_id];
        return state;
      });
    } else {
      setItems((prev) => {
        const state: CartItemDictionary = { ...prev };
        state[item.product_id] = { ...item };
        return state;
      });
    }
  }, []);

  const saveCart = useCallback(() => {
    setLoading(true);
    const data: Cart = { line_items: Object.values(items) };
    const query = { include: 'redirect_urls' };
    post('/carts', data, query)
      .then((res) => {
        const item = res as unknown as ObjectResponse<PostCart>;
        window.open(item.data.redirect_urls.cart_url, '_self', 'noopener,noreferrer');
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [items]);

  const contextValue = useMemo(
    () => ({
      loading,
      items,
      updateItem,
      saveCart
    }),
    [items, loading, saveCart, updateItem]
  );

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;

export type CartContextType = {
  loading: boolean;
  items: CartItemDictionary;
  updateItem: (item: CartItem) => void;
  saveCart: () => void;
};

type Props = {
  children: React.ReactNode;
};
