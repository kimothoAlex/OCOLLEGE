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