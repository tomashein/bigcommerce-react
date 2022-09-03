export type CartItem = {
  quantity: number;
  product_id: number;
  variant_id: number;
};

export type Cart = {
  line_items: CartItem[];
};

export type CartItemDictionary = {
  [index: number]: CartItem;
};

export type PostCart = {
  base_amount: number;
  cart_amount: number;
  channel_id: number;
  created_time: string;
  currency: {
    code: string;
  };
  customer_id: number;
  discount_amount: number;
  email: string;
  id: string;
  locale: string;
  redirect_urls: {
    cart_url: string;
    checkout_url: string;
    embedded_checkout_url: string;
  };
  tax_included: boolean;
  updated_time: string;
};
