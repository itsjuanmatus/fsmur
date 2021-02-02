import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import BlogList from '../partials/BlogList';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import FeaturesZigzag from '../partials/FeaturesZigzag';

function Blog() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

      
        {/*  Page sections */}
        <FeaturesZigzag />
        

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Blog;