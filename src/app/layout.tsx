import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vishnu Vijayakumar - Senior Software Engineer",
  description:
    "Senior Software Engineer portfolio showcasing innovative projects and professional experience in full-stack development",
  keywords: [
    "senior software engineer",
    "portfolio",
    "full-stack developer",
    "software development",
    "web development",
    "Bengaluru",
    "India",
  ],
  authors: [{ name: "Vishnu Vijayakumar" }],
  openGraph: {
    title: "Vishnu Vijayakumar - Senior Software Engineer",
    description:
      "Senior Software Engineer portfolio showcasing innovative projects and professional experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white antialiased">
        <div className="relative min-h-screen">
          {/* Background decorative elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
