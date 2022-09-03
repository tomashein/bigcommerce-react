import { useContext } from 'react';
import { CartContext, CartContextType } from '@context/cart';

const useCart = () => useContext(CartContext) as CartContextType;

export default useCart;
