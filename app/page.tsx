import db from "@/lib/prisma";
import { ProductCard } from "./products/ProductCard";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home(props : { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;
  const pageSize = 3;
  const skip = (page - 1) * pageSize;
  const [products, total] = await Promise.all([
    db.product.findMany({
      skip: skip,
      take: pageSize,
    }),
    db.product.count()
  ]) 
  const totalPages = Math.ceil(total / pageSize);
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      <p>Showing {products.length} products</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
        }
      </div>
      <Pagination className="mt-6">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`?page=${page - 1}`} />
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, i) => 
          <PaginationItem key={i}>
            <PaginationLink
              href={`?page=${i+1}`}
              isActive={i+1 === page}
            >
              {i+1}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext href={`?page=${page+1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </main>
    );
}

