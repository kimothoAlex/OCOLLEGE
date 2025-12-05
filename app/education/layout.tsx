
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'OCA Education Department',
  description: 'Official page for the education department of Orthodox College of Africa.',
};
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
     <section className="min-h-screen bg-white text-black antialiased">
      <main>{children}</main>
    </section>
    )
  }