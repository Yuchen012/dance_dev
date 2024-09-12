import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="logo">
            <a href="#">Studio Ann</a>
          </div>

          <nav>
            <ul>
              <li><Link href="/screen/news">NEWS</Link></li>
              <li><Link href="/screen/about">ABOUT</Link></li>
              <li><Link href="/screen/service">SERVICES</Link></li>
              <li><Link href="/screen/contact">CONTACT</Link></li>
            </ul>
          </nav>
        </header>
        
        <main>{children}</main>
      </body>
    </html>
  );
}
