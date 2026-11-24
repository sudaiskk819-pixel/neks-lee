import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "NEKS-lee - Learn, Earn, Connect, Grow",
  description: "NEKS-lee - Learn, Earn, Connect, Grow",
  icons: {
    icon: "/tab-logo.png?v=300",
    shortcut: "/tab-logo.png?v=300",
    apple: "/tab-logo.png?v=300",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tab-logo.png?v=300" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}