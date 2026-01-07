import { Prisma } from "@/lib/generated/prisma/client";
import db from "@/lib/prisma";

async function main() {
    // Seed your database here
    await db.product.deleteMany();
    await db.category.deleteMany();
    const electronics = await db.category.create({
      data: { name: "Electronics", slug: "electronics" },
    });
    const clothing = await db.category.create({
      data: { name: "Clothing", slug: "clothing" },
    });
    const home = await db.category.create({
      data: { name: "Home", slug: "home" },
    });
    const products: Prisma.ProductCreateManyInput[] = [
        {
          name: "Wireless Headphones",
          price: 99.99,
          description: "High-quality wireless headphones with noise cancellation.",
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          categoryId: electronics.id,
          slug: "wireless headphones"
        },
        {
            name: "Smart Watch",
            price: 149.99,
            description: "Smartwatch with fitness tracking and notifications.",
            image: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12",
            categoryId: electronics.id,
            slug: "smart watch"
        },
        {
            name: "Running Shoes",
            price: 79.99,
            description: "Comfortable running shoes for all terrains.",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            categoryId: clothing.id,
            slug: "running shoes"
        },
        {
            name: "Leather Wallet",
            price: 49.99,
            description: "Genuine leather wallet with multiple compartments.",
            image: "https://images.unsplash.com/photo-1620109176813-e91290f6c795",
            categoryId: clothing.id,
            slug: "leather wallet"
        },
        {
            name: "Sunglasses",
            price: 29.99,
            description: "Stylish sunglasses with UV protection.",
            image: "https://images.unsplash.com/photo-1566421966482-ad8076104d8e",
            categoryId: clothing.id,
            slug: "sunglasses"
        }
    ];
    const createdProducts = await db.product.createMany({ 
      data: products });
  }
main()
  .then(async () => {
    console.log('Database has been seeded. 🌱')
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })


