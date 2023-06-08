'use client';

import "./styles/main.scss";
import { Footer } from "./components/footer/Footer";
import Header from "./components/Navbar/Header";
import GlobalProvider from "./context/global/Global-provider";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>E-Medica</title>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"></link>
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </head>
      <body>
        <GlobalProvider>
          <Header />

          <main>{children}</main>

          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
};
export default RootLayout;
