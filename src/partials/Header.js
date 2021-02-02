import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNavOpen || mobileNav.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="w-20 sm:w-32 lg:w-56 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img
                className="fill-current py-10"
                src="https://fsmur.no/addons/fsmur/themes/fsmur/img/logo_b.svg"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-grow">
            {/* Desktop menu links */}
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2S flex items-center transition duration-150 ease-in-out"
                >
                  HJEM
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  OM OSS
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  TJNESTER
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  REFERANSER
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  KONTAKT
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden ">
            {/* Hamburger button */}
            <button
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav
              id="mobile-nav"
              ref={mobileNav}
              className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
              style={
                mobileNavOpen
                  ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 }
                  : { maxHeight: 0, opacity: 0.8 }
              }
            >
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <Link
                    to="/"
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    HJEM
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    OM OSS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    TJNESTER
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    REFERANSER
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    KONTAKT
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
