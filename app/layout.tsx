import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "NEKS-lee - Learn, Earn, Connect, Grow",
  description: "NEKS-lee - Learn, Earn, Connect, Grow",
  icons: {
    icon: "/favicon.ico?v=200",
    shortcut: "/favicon.ico?v=200",
    apple: "/logo.png?v=200",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=200" />
        <link rel="shortcut icon" href="/favicon.ico?v=200" />
        <link rel="apple-touch-icon" href="/logo.png?v=200" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}