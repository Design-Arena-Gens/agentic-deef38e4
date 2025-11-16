import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "15-Min Full Body Dumbbell Workout",
  description:
    "Efficient full body routine for muscle growth, strength, and aesthetics using just 5kg dumbbells."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
