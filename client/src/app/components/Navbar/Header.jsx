"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [search, setSearch] = useState("");
  function changeNavbar() {
    setOpenNavbar(!openNavbar);
  }

  // Ponerle al input    onKeyDown={searchHandler}, en teoria está funcionando
  async function searchHandler(e) {
    setSearch(e.target.value);

    if (e.keyCode == 13) {
      const api = await axios.get("http://localhost:3001/specialist");
      const data = api.data;
      const result = data.map((e) => {
        if (e.specialty.name.toLowerCase().includes(search.toLowerCase())) {
        }
      });
      return result;
    }
  }
  return (
    <header className="header">
      <div className="header-mobile">
        <Link className="header-logo" href="/">
          <Image src="/images/logo.webp" width={100} height={100}></Image>
        </Link>
        <div className="header-cont-input">
          <input
            type="text"
            className="header-input"
            placeholder="Buscar especialista"
          />
        </div>
        <button className="header-menu-mobile" onClick={changeNavbar}>
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="header-open-menu"
          >
            <path
              d="M1.04347 5.73935H22.9565C23.5328 5.73935 24 5.27218 24 4.69589C24 4.1196 23.5328 3.65243 22.9565 3.65243H1.04347C0.467172 3.65243 3.8147e-06 4.1196 3.8147e-06 4.69589C3.8147e-06 5.27218 0.467172 5.73935 1.04347 5.73935Z"
              fill="#1E202D"
              className={`header-path-2 ${openNavbar ? "header-open-path-1" : "header-open-close-2"
                }`}
            />
            <path
              d="M22.9565 10.9572H1.04347C0.467172 10.9572 3.8147e-06 11.4243 3.8147e-06 12.0006C3.8147e-06 12.5769 0.467172 13.0441 1.04347 13.0441H22.9565C23.5328 13.0441 24 12.5769 24 12.0006C24 11.4243 23.5328 10.9572 22.9565 10.9572Z"
              fill="#1E202D"
              className={`header-path-1 ${openNavbar ? "header-open-path-2" : "header-close-1"
                }`}
            />
            <path
              d="M22.9565 18.261H1.04347C0.467172 18.261 3.8147e-06 18.7282 3.8147e-06 19.3045C3.8147e-06 19.8808 0.467172 20.348 1.04347 20.348H22.9565C23.5328 20.348 24 19.8808 24 19.3045C24 18.7282 23.5328 18.261 22.9565 18.261Z"
              fill="#1E202D"
              className={`header-path-3 ${openNavbar ? "header-open-path-3" : "header-open-close-3"
                }`}
            />
          </svg>
        </button>
      </div>
      <Navbar valueNavbar={openNavbar} />
    </header>
  );
};

export default Header;
