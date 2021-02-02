import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="text-gray-400">Adresse:</div>
              <div className="text-gray-400">FS Mur AS</div>
              <div className="text-gray-400">FS Mur AS Mjåvannsvegen 162B</div>
              <div className="text-gray-400">4628 KRISTIANSAND</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-2 gap-8">
              {/* 2nd block */}
              <div className="text-sm">
                <div className="text-gray-200">Telefon:</div>
                <div className="text-gray-200">+47 994 77 780</div>
                
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <div className="text-gray-200">E-post:</div>
                <div className="text-gray-200">post@fsmur.no</div>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex sm:flex-wrap sm:min-w-full mb-4 md:order-1 md:ml-4 md:mb-0 space-x-8">
              <li>
                <Link
                  to="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                >
                  <img
                    className="w-max h-12 fill-current"
                    src="https://fsmur.no/addons/fsmur/themes/fsmur/img/vi-har-laerling.png"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                >
                  <img
                    className="w-max h-12 fill-current"
                    src="https://fsmur.no/addons/fsmur/themes/fsmur/img/ansvarsrett.png"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                >
                  <img
                    className="w-max h-12 fill-current"
                    src="https://fsmur.no/addons/fsmur/themes/fsmur/img/mester.png"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                >
                  <img
                    className="w-max h-12 fill-current"
                    src="https://fsmur.no/addons/fsmur/themes/fsmur/img/bvn.png"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                >
                  <img
                    className="w-max h-12 fill-current"
                    src="https://fsmur.no/addons/fsmur/themes/fsmur/img/start.png"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                >
                  <img
                    className="w-max h-12 fill-current"
                    src="https://fsmur.no/addons/fsmur/themes/fsmur/img/mil.png"
                  />
                </Link>
              </li>
            </ul>

            <div className="text-gray-400 text-sm mr-4 mb-8">
              <div className="flex-shrink-0 mr-4">
                {/* Logo */}
                <Link to="/" className="block" aria-label="logo">
                  <img
                    className="w-56 fill-current"
                    src="https://fsmur.no/addons/fsmur/themes/fsmur/img/logo_b.svg"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
