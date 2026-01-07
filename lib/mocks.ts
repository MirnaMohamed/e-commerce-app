export type Product = {
    id: number;
    name: string;
    price: number;
    description: string | null;
    image: string | null;
    categoryId: number;
};


// export const mockProducts: Product[] = [
//     {
//         id: "1",
//         name: "Wireless Headphones",
//         price: 99.99,
//         description: "High-quality wireless headphones with noise cancellation.",
//         image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         category: "Electronics",
//     },
//     {
//         id: "2",
//         name: "Smart Watch",
//         price: 149.99,
//         description: "Smartwatch with fitness tracking and notifications.",
//         image: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12",
//         category: "Electronics",
//     },
//     {
//         id: "3",
//         name: "Running Shoes",
//         price: 79.99,
//         description: "Comfortable running shoes for all terrains.",
//         image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//         category: "Shoes",
//     },
//     {
//         id: "4",
//         name: "Leather Wallet",
//         price: 49.99,
//         description: "Genuine leather wallet with multiple compartments.",
//         image: "https://images.unsplash.com/photo-1620109176813-e91290f6c795",
//         category: "Accessories",
//     },
//     {
//         id: "5",
//         name: "Sunglasses",
//         price: 29.99,
//         description: "Stylish sunglasses with UV protection.",
//         image: "https://images.unsplash.com/photo-1566421966482-ad8076104d8e",
//         category: "Accessories",
//     }
// ];