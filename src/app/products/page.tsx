import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Products - ShopStore",
  description: "Browse our wide range of products",
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      
      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">All</button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Electronics</button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Clothing</button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Home</button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Accessories</button>
        </div>
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2">Sort by:</label>
          <select 
            id="sort" 
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-az">Name: A to Z</option>
          </select>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            category={product.category}
          />
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex items-center space-x-1">
          <button className="px-4 py-2 border rounded-md bg-gray-200 text-gray-600">Previous</button>
          <button className="px-4 py-2 border rounded-md bg-blue-600 text-white">1</button>
          <button className="px-4 py-2 border rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300">2</button>
          <button className="px-4 py-2 border rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300">3</button>
          <button className="px-4 py-2 border rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300">Next</button>
        </div>
      </div>
    </div>
  );
} 