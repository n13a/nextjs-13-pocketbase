/* eslint-disable @next/next/no-head-element */
import './global.css'
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="./global.css" />
      </head>
      <body>
        <nav>
          <Link href={'/'}>
            Home
          </Link>

          <Link href={'/notes'}>
            Notes
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
