import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Shopping Cart - ShopStore",
  description: "View and manage your shopping cart",
};

// Sample cart items for UI display
const cartItems = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 149.99,
    image: "https://placehold.co/600x400/3b82f6/FFFFFF?text=Headphones",
    quantity: 1
  },
  {
    id: "4",
    name: "Premium Coffee Maker",
    price: 89.99,
    image: "https://placehold.co/600x400/22c55e/FFFFFF?text=Coffee+Maker",
    quantity: 2
  }
];

export default function CartPage() {
  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 10.00;
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="py-4 px-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="py-4 px-2 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="py-4 px-6 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <div className="h-20 w-20 flex-shrink-0 rounded-md overflow-hidden relative">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="80px"
                              className="object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                            <button className="text-sm text-red-500 mt-1 hover:underline">Remove</button>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <select className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 w-16">
                          {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num} selected={num === item.quantity}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="py-4 px-2 text-right text-sm text-gray-500">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="py-4 px-6 text-right text-sm font-medium text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <Link 
                href="/products" 
                className="text-blue-600 hover:text-blue-700 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Continue Shopping
              </Link>

              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                Update Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-lg">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 mb-4">
                Proceed to Checkout
              </button>

              <div className="border-t pt-4 mt-4">
                <h3 className="text-sm font-medium mb-2">Promotional Code</h3>
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Enter your code" 
                    className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-r-md hover:bg-gray-300">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <div className="text-4xl mb-4">🛒</div>
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven&apos;t added any products to your cart yet.</p>
          <Link 
            href="/products" 
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700"
          >
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
} 