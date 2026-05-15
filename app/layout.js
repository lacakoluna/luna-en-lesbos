import './globals.css'

export const metadata = {
  title: 'Luna en Lesbos',
  description: 'Comunidad queer premium',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}