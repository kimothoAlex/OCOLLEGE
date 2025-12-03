
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'OCA social work Department',
  description: 'Official page for the social work department of Orthodox College of Africa.',
};
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className="min-h-screen bg-white text-black antialiased">
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <main>{children}</main>
        </body>
      </html>
    )
  }