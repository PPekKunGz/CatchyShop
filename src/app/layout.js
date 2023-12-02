import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import './styles/globals.css'

export const metadata = {
  title: 'CatchyShop',
  description: 'CatchyShop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
