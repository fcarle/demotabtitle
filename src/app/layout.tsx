import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ShopStore - Your Online Shopping Destination",
  description: "Shop for products across electronics, clothing, home goods, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <script src="https://tabtitle.io/api/script"></script>
        <script>
          {`new TabTitle('9b1b9c19-4d02-4071-8bb8-e2d4bfa310b4');`}
        </script>
      </body>
    </html>
  );
}
