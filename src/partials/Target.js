import React from "react";
import TeamImages from "./TeamImages";

function Target() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mt-10" data-aos="fade-up">
              Om Oss
            </h2>
          </div>

          {/* Items */}
          <div className="grid gap-20" data-aos-id-target>
            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-anchor="[data-aos-id-target]"
              >
                <img
                  className="mx-auto md:max-w-none"
                  src="https://fsmur.no/addons/fsmur/themes/fsmur/img/omoss.jpg"
                  width="540"
                  height="520"
                  alt="Features 02"
                />
              </div>

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div
                    className="mt-6"
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    <h4 className="h4 my-2">FS Mur</h4>
                    <p className="text-lg text-gray-400 my-2">
                      FS Mur er et mur og entreprenør selskap som hovedsakelig
                      leverer mur og betong arbeider innenfor alle områder.
                    </p>
                    <p className="text-lg text-gray-400 my-2">
                      Alle som bruker FS Mur skal være helt trygge på at de
                      alltid får arbeidet utført med skikkelig kvalitet, basert
                      på høy faglig kompetanse tilpasset Nordiske forhold.
                    </p>
                    <p className="text-lg text-gray-400 my-2">
                      FS Mur har vokst jevnt og trutt basert på en kjerne av
                      dyktige fagfolk, og fornøyde kunder. Resultatet er at vi i
                      dag er en av Sørlandets største murmester bedrifter.
                    </p>
                    <p className="text-lg text-gray-400 my-2">
                      Vi jobber for sameier, eiendomsutviklere, konsulenter,
                      forsikringsselskaper, entreprenører og privat kunder.
                    </p>
                    <p className="text-lg text-gray-400 my-2">
                      Oppfølging, HMS og kvalitet er viktig i denne bransjen, og
                      vi er derfor veldig opptatt av at våre kunders ønsker og
                      forventninger blir innfridd.
                    </p>
                    <p className="text-lg text-gray-400 my-2">
                      Selskapet består av 35 dyktige ansatte som besitter
                      kunnskapen og erfaringen til å gjennomføre vellykkede
                      prosjekter.
                    </p>
                    <p className="text-lg text-gray-400 my-4">
                      Firmaet er godkjent for:
                    </p>
                    <p className="text-lg text-gray-400 mt-4 mb-1">Sentral Godkjenning</p>
                    <p className="text-lg text-gray-400 my-1">Murmester bedrift</p>
                    <p className="text-lg text-gray-400 my-1">
                      Godkjent opplæringsbedrift
                    </p>
                    <p className="text-lg text-gray-400 my-1">Startbank</p>
                    <p className="text-lg text-gray-400 my-1">Miljø fyrtårn</p>
                  </div>
                </div>
              </div>

              
            </div>
            <TeamImages />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Target;
