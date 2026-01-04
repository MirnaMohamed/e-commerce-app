import db from "@/lib/prisma";

export default async function Products() {
  // Fetch all products from the database
  const products = await db.product.findMany();
  console.log(products);
  return (
    <>
      <div>Products</div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}