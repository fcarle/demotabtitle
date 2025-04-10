import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-xl text-gray-600 max-w-md mb-8">
        We're sorry, the page you requested could not be found. Please check the URL or go back to the homepage.
      </p>
      <Link 
        href="/" 
        className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700"
      >
        Return to Homepage
      </Link>
    </div>
  );
} 