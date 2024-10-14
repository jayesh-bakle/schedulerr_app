import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Scheduller",
  description: "calendly_app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <Header />
       <main className="min-h-screen bg-gradient-to-b from-blue-50 to-whitewhite">
        {children}
        </main>
        {/* Footer */}
        <footer className="bg-blue-100 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with ❤️ by Jayesh Bakle</p>
          </div>
        </footer>
        </body>
    </html>
    </ClerkProvider>
  );
}
