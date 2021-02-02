import React from "react";

function FeaturesZigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">TJNESTER</h1>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src="https://fsmur.no/addons/fsmur/themes/fsmur/img/a.jpg"
                  width="400"
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
                  <h3 className="h3 mb-3">Mur</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Ingen prosjekter er like, derfor er våre sterkeste
                    egenskaper nettopp vår kompetanse og brede erfaring innen
                    fasadearbeider, rehabilitering, flisarbeider, gulvavretting,
                    piper og ildsteder.
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

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl"
                data-aos="fade-up"
              >
                <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src="https://fsmur.no/addons/fsmur/themes/fsmur/img/betong.jpg"
                  width="540"
                  height="405"
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Betong</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Vi har lang erfaring og flinke ansatte som gjør at vi har
                    kompetansen til å utføre ditt prosjekt. Vi er utførende på
                    plasstøpte betongkonstruksjoner,betongrehabilitering,
                    betongarbeider, betongkutting og kjerneboring.
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
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src="https://fsmur.no/addons/fsmur/themes/fsmur/img/omoss.jpg"
                  width="540"
                  height="405"
                  alt="Features 03"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">ENTREPRENØR</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Vi utfører totalentrepriser som omfatter nybygg/boliger,
                    leilighetsbygg, næringsbygg og anlegg.
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

export default FeaturesZigzag;
