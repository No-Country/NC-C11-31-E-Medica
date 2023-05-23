import './styles/main.scss'
import { Footer } from './components/footer/Footer'
import Header from './components/Navbar/Header'

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <title>E-Medica</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
export default RootLayout
