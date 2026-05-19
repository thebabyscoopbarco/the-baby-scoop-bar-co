import './globals.css'

export const metadata = {
  title: 'The Baby Scoop Bar',
  description: 'Mystery scoop baby edition',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
