import db from "@/lib/prisma";
import { ProductCard } from "./products/ProductCard";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      <p>Showing {db.product.count()} products</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {db.product.findMany().then((products) => products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )))}
      </div>
    </main>
    );
}

