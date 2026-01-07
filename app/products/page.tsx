import { Card } from "@/components/ui/card";
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
          <Card key={product.id}>
            <li>{product.name}</li>
            <li>{product.description}</li>
            <li className="w-full text-right">{product.price}</li>
          </Card>
        ))}
      </ul>
    </>
  );
}