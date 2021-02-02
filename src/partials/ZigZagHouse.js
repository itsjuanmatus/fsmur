import React from "react";

function ZigZagHouse() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Referanser</h1>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center pr-32">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src="https://fsmur.no/files/large/3af57e2498870c9e032d2543a3817dce.jpg"
                  width="700"
                  height="max"
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Victoria Hotell Stavanger</h3>
                  <div data-aos="fade-up" data-aos-delay="400">
                    <a
                      className="btn text-white bg-red-100 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                      href="#0"
                    >
                      SE MER
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center ml-32">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl"
                data-aos="fade-up"
              >
                <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src="https://fsmur.no/files/large/677d6c6397389eb4c2e9ff65068f61cb.jpg"
                  width="700"
                  height="max"
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 mr-32"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Amerikalinja Oslo</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Amerikalinjen ligger midt i Oslo sentrum og er et livlig
                    boutique hotell som er oppkalt etter cruiseskipet fra
                    1800-tallet med samme navn. FS mur utførte mur, betong og
                    flisarbeider på prosjektet.
                  </p>
                  <div data-aos="fade-up" data-aos-delay="400">
                    <a
                      className="btn text-white bg-red-100 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                      href="#0"
                    >
                      SE MER
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center mr-32">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src="https://fsmur.no/files/large/9594196fa0897c4818164c389f8f227e.jpg"
                  width="700"
                  height="max"
                  alt="Features 03"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Caledonien Kristiansand</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Caledonien hotell ligger sjønært i Kristiansand sentrum.
                    Hotellet ble totalrenovert utvendig og innvendig i
                    2017-2018. FS mur utførte mur og flisarbeider på prosjektet.
                  </p>
                  <div data-aos="fade-up" data-aos-delay="400">
                    <a
                      className="btn text-white bg-red-100 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                      href="#0"
                    >
                      SE MER
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ZigZagHouse;
