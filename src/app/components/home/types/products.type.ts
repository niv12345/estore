export interface IProduct {
  id: number;
  product_name: string;
  price: number;
  description?: string;
  category?: string;
  product_img: string;
  ratings:number;
  category_id?:number;
}