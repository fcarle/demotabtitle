import Image from "next/image";
import Link from "next/link";
import { getProductById } from "@/data/products";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Product Details - ShopStore",
  description: "View detailed product information",
};

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const product = getProductById(params.id);
  
  if (!product) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <nav className="flex mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-blue-600">Products</Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </nav>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
        
        {/* Product Details */}
        <div>
          <span className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</span>
          <h1 className="text-3xl font-bold mt-2 mb-4">{product.name}</h1>
          <div className="text-2xl font-bold text-blue-600 mb-6">${product.price.toFixed(2)}</div>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="font-medium">Quantity:</label>
              <select 
                id="quantity" 
                className="border rounded-md px-3 py-2 w-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 w-full sm:w-auto">
                Add to Cart
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 w-full sm:w-auto">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products Section (simplified) */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-6">You might also like</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {/* Just showing empty placeholders for simplicity */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="min-w-[250px] bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Related Product {item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 