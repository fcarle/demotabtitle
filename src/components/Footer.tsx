import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">ShopStore</h3>
          <p className="text-gray-300">
            Your one-stop shop for all your shopping needs.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-300 hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-gray-300 hover:text-white">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <address className="text-gray-300 not-italic">
            123 Shop Street<br />
            Shopville, SH 12345<br />
            Email: info@shopstore.com<br />
            Phone: (123) 456-7890
          </address>
        </div>
      </div>
      <div className="container mx-auto border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} ShopStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 