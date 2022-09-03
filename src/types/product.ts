import { BulkPricingRules, CustomField } from './common';

export type Image = {
  image_file: string;
  is_thumbnail: boolean;
  sort_order: number;
  description: string;
  image_url: string;
  id: number;
  product_id: number;
  url_zoom: string;
  url_standard: string;
  url_thumbnail: string;
  url_tiny: string;
  date_modified: Date;
};

type Video = {
  title: string;
  description: string;
  sort_order: number;
  type: string;
  video_id: string;
  id: number;
  product_id: number;
  length: string;
};

type Option = {
  id: number;
};

type Modifier = {
  id: number;
};

type Variant = {
  id: number;
};

export type RawProduct = {
  id: number;
  name: string;
  type: string;
  sku: string;
  description: string;
  weight: number;
  width: number;
  depth: number;
  height: number;
  price: number;
  cost_price: number;
  retail_price: number;
  sale_price: number;
  map_price: number;
  tax_class_id: number;
  product_tax_code: string;
  categories: number[];
  brand_id: number;
  inventory_level: number;
  inventory_warning_level: number;
  inventory_tracking: string;
  fixed_cost_shipping_price: number;
  is_free_shipping: boolean;
  is_visible: boolean;
  is_featured: boolean;
  related_products: number[];
  warranty: string;
  bin_picking_number: string;
  layout_file: string;
  upc: string;
  search_keywords: string;
  availability_description: string;
  availability: string;
  gift_wrapping_options_type: string;
  gift_wrapping_options_list: number[];
  sort_order: number;
  condition: string;
  is_condition_shown: boolean;
  order_quantity_minimum: number;
  order_quantity_maximum: number;
  page_title: string;
  meta_keywords: string[];
  meta_description: string;
  view_count: number;
  preorder_release_date: Date;
  preorder_message: string;
  is_preorder_only: boolean;
  is_price_hidden: boolean;
  price_hidden_label: string;
  custom_url: {
    url: string;
    is_customized: boolean;
  };
  open_graph_type: string;
  open_graph_title: string;
  open_graph_description: string;
  open_graph_use_meta_description: boolean;
  open_graph_use_product_name: boolean;
  open_graph_use_image: boolean;
  'brand_name or brand_id': string;
  gtin: string;
  mpn: string;
  reviews_rating_sum: number;
  reviews_count: number;
  total_sold: number;
  custom_fields: CustomField[];
  bulk_pricing_rules: BulkPricingRules[];
  images: Image[];
  videos: Video[];
  date_created: Date;
  date_modified: Date;
  base_variant_id: number;
  calculated_price: number;
  options: Option[];
  modifiers: Modifier[];
  option_set_id: number;
  option_set_display: string;
  variants: Variant[];
};

export type Product = {
  id: number;
  name: string;
  sku: string;
  images: Image[];
  variants: Variant[];
};
