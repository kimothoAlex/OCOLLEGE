
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'OCA fashion Department',
  description: 'Official page for the fashion department of Orthodox College of Africa.',
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