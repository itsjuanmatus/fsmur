import React from "react";

function FeaturesHome() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Items */}
          <div className="grid gap-20" data-aos-id-features-home>
            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-features-home]"
              >
                <div className="relative">
                  {/* <img
                    className="md:max-w-none"
                    src={require("../images/features-illustration.png")}
                    width="540"
                    height="520"
                    alt="Features illustration"
                  /> */}
                  <video width="540" height="520" autoplay="autoplay">
                    <source src="https://fsmur.no/addons/fsmur/themes/fsmur/img/fsmur_A.mp4" type="video/mp4" />
                  </video>
                  {/* <svg
                    className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
                    width="540"
                    height="520"
                    viewBox="0 0 540 520"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="fill-current text-purple-600">
                      <circle className="pulse" cx="270" cy="260" r="64" />
                      <circle
                        className="pulse pulse-1"
                        cx="270"
                        cy="260"
                        r="64"
                      />
                      <circle
                        className="pulse pulse-2"
                        cx="270"
                        cy="260"
                        r="64"
                      />
                      <circle
                        className="pulse pulse-3"
                        cx="270"
                        cy="260"
                        r="64"
                      />
                    </g>
                  </svg> */}
                </div>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
                data-aos-anchor="[data-aos-id-features-home]"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    Lighting fast workflow
                  </div>
                  <h3 className="h3 mb-3">Say hello to research data</h3> */}
                  <p className="text-l text-gray-400 mb-4 mt-4">
                    Vi er like opptatt av kvalitet og et godt sluttprodukt som
                    byggherrer og huseiere. Vi har egne ansatte innen flere fag,
                    men av og til er det nødvendig å hente kompetanse og
                    ekspertise utenfor eget hus. Derfor har vi bred erfaring i å
                    samarbeide med andre håndverksgrupper. Vi bruker kun folk vi
                    stoler på.
                  </p>
                  <p className="text-l text-gray-400 mb-4">
                    Vi kommer gjerne på befaring for å vurdere mulighetene, og
                    for å gi råd om hvilke tiltak som best vil lønne seg.
                  </p>
                  <p className="text-l text-gray-400 mb-4">
                    Vi rehabiliterer og leverer komplette bad som gir trygghet
                    for kunden i mange år, og som er bygget etter våtromsnormens
                    regler. Vi leverer også murarbeider, avretting, membran og
                    fliser, eller andre detaljer i bad og andre våtrom, i
                    forhold til det som kunden ønsker. Vi arbeider alltid for å
                    levere holdbare og håndverksmessige riktige løsninger.
                  </p>
                  <p className="text-l text-gray-400 mb-4">
                    FS Mur utfører også større flisleggingsprosjekter på hotell
                    og næringsbygg, samtidig som vi heller ikke sier nei til
                    småjobber som å bytte et par skadede fliser i et bad.
                  </p>
                  <p className="text-l text-gray-400 mb-4">
                    Vi føler stolthet for faget og har trygghet og kompetansen
                    som skal til for å levere kvalitet.
                  </p>
                  <p className="text-l text-gray-400 mb-4">
                    Vi legger sterk vekt på høy fagkompetanse, og uansett
                    oppdragets størrelse legger vi vår ære i at du som kunde
                    skal bli fornøyd.
                  </p>

                  <div data-aos="fade-up" data-aos-delay="400">
                    <a
                      className="btn text-white bg-red-100 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                      href="#0"
                    >
                      Kontakt oss
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

export default FeaturesHome;
