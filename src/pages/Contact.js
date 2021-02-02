import React from "react";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import CtaContact from "../partials/CtaContact";
import Footer from "../partials/Footer";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h1 mb-4" data-aos="fade-up">
                  Kontakt
                </h1>
              </div>
              <div className="max-w-6xl mx-auto px-4 sm:px-6 ml-40">
                {/* Top area: Blocks */}
                <div className="grid md:grid-cols-12 gap-4 lg:gap-2 mb-8 md:mb-12">
                  {/* 1st block */}
                  <div className="md:col-span-4 lg:col-span-4">
                    <div className="text-white font-semibold">Erik Solli</div>
                    <div className="text-gray-400 pb-8">
                      Daglig leder/kalkulatør
                    </div>
                    <div className="text-gray-400">Tlf: 99477780</div>
                    <div className="text-gray-400">Mail: erik@fsmur.no</div>
                  </div>
                  <div className="md:col-span-4 lg:col-span-4">
                    <div className="text-white font-semibold">Erik Solli</div>
                    <div className="text-gray-400 pb-8">
                      Daglig leder/kalkulatør
                    </div>
                    <div className="text-gray-400">Tlf: 99477780</div>
                    <div className="text-gray-400">Mail: erik@fsmur.no</div>
                  </div>
                  <div className="md:col-span-4 lg:col-span-4">
                    <div className="text-white font-semibold">Erik Solli</div>
                    <div className="text-gray-400 pb-8">
                      Daglig leder/kalkulatør
                    </div>
                    <div className="text-gray-400">Tlf: 99477780</div>
                    <div className="text-gray-400">Mail: erik@fsmur.no</div>
                  </div>
                  <div className="md:col-span-4 lg:col-span-4 mt-8">
                    <div className="text-white font-semibold">Erik Solli</div>
                    <div className="text-gray-400 pb-8">
                      Daglig leder/kalkulatør
                    </div>
                    <div className="text-gray-400">Tlf: 99477780</div>
                    <div className="text-gray-400">Mail: erik@fsmur.no</div>
                  </div>
                  <div className="md:col-span-4 lg:col-span-4 mt-8">
                    <div className="text-white font-semibold">Erik Solli</div>
                    <div className="text-gray-400 pb-8">
                      Daglig leder/kalkulatør
                    </div>
                    <div className="text-gray-400">Tlf: 99477780</div>
                    <div className="text-gray-400">Mail: erik@fsmur.no</div>
                  </div>
                  <div className="md:col-span-4 lg:col-span-4 mt-8">
                    <div className="text-white font-semibold">Erik Solli</div>
                    <div className="text-gray-400 pb-8">
                      Daglig leder/kalkulatør
                    </div>
                    <div className="text-gray-400">Tlf: 99477780</div>
                    <div className="text-gray-400">Mail: erik@fsmur.no</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Contact;
