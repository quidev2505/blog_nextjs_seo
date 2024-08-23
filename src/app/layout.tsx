import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CategoryProvider } from "@/context/CategoryContext";

const sora = Sora({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    default: "Home page - Blog latest new",
    template: "%s - Blog latest new",
  },
  description: "This is Blog latest new",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <div className="bg-black">
          <div className="mx-auto max-w-screen-lg bg-white">
            <Header />
            <CategoryProvider>
              <div className="flex min-h-screen flex-col items-center justify-between sm:p-24 pt-4 sm:pt-1">
                {children}
              </div>
            </CategoryProvider>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
