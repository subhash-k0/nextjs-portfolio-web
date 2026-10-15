import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "John Doe | Full Stack Developer",
  description: "Portfolio of John Doe, a full stack developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.className} antialiased`}>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
