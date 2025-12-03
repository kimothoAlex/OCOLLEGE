import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "OCA Social Work Department",
  description:
    "Official page for the social work department of Orthodox College of Africa.",
}

export default function SocialLayout({
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