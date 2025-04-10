import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link href={`/products/${id}`}>
        <div className="relative h-64 w-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <span className="text-xs text-gray-500 uppercase tracking-wider">{category}</span>
          <h3 className="text-lg font-semibold mt-1">{name}</h3>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-gray-900 font-bold">${price.toFixed(2)}</span>
            <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard; 