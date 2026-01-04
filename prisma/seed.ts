import { Prisma } from "@/lib/generated/prisma/client";
import db from "@/lib/prisma";

async function main() {
    // Seed your database here
    await db.product.deleteMany();
    await db.category.deleteMany();
    const categories: Prisma.CategoryCreateInput[] = [
        { name: 'Electronics', slug: 'electronics'},
        { name: 'Clothing', slug: 'clothing'},
        { name: 'Home', slug: 'home'},
    ]
    const electronics = await db.category.createMany({
        data: categories
    });
    // const clothing = await prisma.category.create({
    //     data: { 
    //         name: 'Clothing' ,
    //         slug: 'clothing',}
    // });
    // const home = await prisma.category.create({
    //     data: { 
    //         name: 'Home' ,  
    //         slug: 'home',}
    // });
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


