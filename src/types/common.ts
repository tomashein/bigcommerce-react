export type CustomField = {
  id: number;
  name: string;
  value: string;
};

export type BulkPricingRules = {
  id: number;
  quantity_min: number;
  quantity_max: number;
  type: string;
  amount: number;
};

type PaginationLinks = {
  previous: string;
  current: string;
  next: string;
};

type Pagination = {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  links: PaginationLinks;
};

type Meta = {
  pagination: Pagination;
};

export type PaginatedResponse<T> = {
  data: T[];
  meta: Meta;
};

export type Query = {
  page: number;
  limit: number;
  include?: string;
  keyword?: string;
};

export type ObjectResponse<T> = {
  data: T;
};
