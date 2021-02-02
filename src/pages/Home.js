import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import Process from '../partials/Process';
import FeaturesHome from '../partials/FeaturesHome';
import Tabs from '../partials/Tabs';
import Target from '../partials/Target';
import News from '../partials/News';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">


        {/*  Page sections */}
        <FeaturesHome />
        

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;