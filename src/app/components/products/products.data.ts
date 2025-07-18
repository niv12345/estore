import { IProductListItem } from "../home/types/products.type";

export const products: IProductListItem[] = [
    {
        id: 1,
        product_name: "Apple iPhone 14",
        price: 999.99,
        description: "Latest model with A15 Bionic chip",
        category: "Smartphones",
        product_img: "jacket.jpg",
        ratings:5
    },
    {
        id: 2,
        product_name: "Samsung Galaxy S23",
        price: 899.99,
        description: "High-performance smartphone with AMOLED display",
        category: "Smartphones",
        product_img: "jacket2.jpg",
        ratings:2
    },
    {
        id: 3,
        product_name: "Sony WH-1000XM5",
        price: 349.99,
        description: "Industry-leading noise-canceling headphones",
        category: "Audio",
        product_img: "jacket.jpg",
        ratings:3
    },
    {
        id: 4,
        product_name: "Dell XPS 13",
        price: 1299.99,
        description: "Premium ultrabook with InfinityEdge display",
        category: "Laptops",
        product_img: "jacket2.jpg",
        ratings:4.5
    },
    {
        id: 5,
        product_name: "Apple MacBook Air M2",
        price: 1199.99,
        description: "Lightweight laptop with M2 chip and Retina display",
        category: "Laptops",
        product_img: "jacket.jpg",
        ratings:5
    }
];