import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dulcet Cupcakes: Get your customized cake now.",
  description:
    "We do Customized cakes and cupcakes in and around Ranchi, Jharkhand. Make your every ocassion sepical by suprising your loved one with a customized cake.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
