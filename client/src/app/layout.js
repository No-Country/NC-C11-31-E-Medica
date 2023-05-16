import './styles/main.scss'

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <title>E-Medica</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
export default RootLayout
