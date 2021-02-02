import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroAbout from '../partials/HeroAbout';
import TeamImages from '../partials/TeamImages';
import Timeline from '../partials/Timeline';
import Team from '../partials/Team';
import TestimonialsCarousel from '../partials/TestimonialsCarousel';
import Career from '../partials/Career';
import Clients from '../partials/Clients';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import ZigZagHouse from '../partials/ZigZagHouse';

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}

        <ZigZagHouse />
      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default About;