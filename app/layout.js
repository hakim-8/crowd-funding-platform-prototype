import "./tailwind.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Jade Fortune | Crowdfunding Platform",
  description: "Pioneering the future of crowdfunding. Empowering auditors and investors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col selection:bg-[#059669] selection:text-[#fdfbf7]">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
