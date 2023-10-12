export interface AllProductsInterface {
  data: DataInterface[];
  meta: MetaInterface;
}

export interface ProductInterface {
  code: number;
  name: string;
  category: string;
  quantity: number;
  buyPrice: number;
  sellePrice: number;
  minQuantityForSale: number;
  blocked: boolean;
}

export interface DataInterface {
  id: number;
  attributes: ProductInterface;
}

export interface MetaInterface {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}
