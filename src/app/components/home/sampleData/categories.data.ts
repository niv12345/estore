import { Icategory } from '../types/Icategory';
export const categories:Icategory[] = [
  {
    id: 1,
    category: "Mens",
  },
  {
    id: 2,
    category: "Women",
  },
  {
    id: 3,
    category: "Kids",
  },
  {
    id: 4,
    category: "Electronics",
    parent_category_id: 1,
  },
  {
    id: 5,
    category: "Home & Kitchen",
    parent_category_id: 2,
  },
  {
    id: 6,
    category: "Sports & Outdoors",
    parent_category_id: 3,
  },
  {
    id: 7,
    category: "Health & Beauty",
    parent_category_id: 2,
  },
  {
    id: 8,
    category: "Toys & Games",
    parent_category_id: 3,
  },
];