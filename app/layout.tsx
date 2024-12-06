import "./globals.css"
import { Metadata } from "next"
import { Roboto_Mono } from "next/font/google"

export const metadata: Metadata = {
  title: "42type",
  description: "Do you want to learn how to type faster and compete with your friends? Join us and challenge them to test your skills! The beginning is tough, but the fun is worth it!",
  keywords: [
    "play",
    "learn",
    "challenge",
    "test",
    "skills",
    "fun"
  ],
  authors: [
    {
      name: "42type",
      url: "https://42type.me"
    }
  ],
  alternates: {
    canonical: "https://42type.me"
  }
}

const roboto_Mono = Roboto_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"]
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return (
    <html lang="en">
      <body className={`${roboto_Mono.className} select-none min-w-full flex justify-center cursor-default p-[2rem] bg-[--bg-color]`}>
        <main className="2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-full">
          {children}
        </main>
      </body>
    </html>
  )
}