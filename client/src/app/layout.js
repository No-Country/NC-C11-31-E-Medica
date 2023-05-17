import './styles/main.scss'
import { Footer } from './components/footer/Footer'
import Navbar from './components/Navbar/Navbar'
const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <title>E-Medica</title>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
export default RootLayout
