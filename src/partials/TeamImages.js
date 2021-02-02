import React from 'react';

function TeamImages() {
  return (
    <section className="relative -mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full h-0 pb-3/4">
            <figure className="relative mx-auto h-auto" style={{ width: '78.13%', maxWidth: '600px' }} data-aos="fade-down" data-aos-delay="100">
              <img src="https://fsmur.no/addons/fsmur/themes/fsmur/img/map.jpg" width="600" height="338" alt="Team mosaic 01" />
            </figure>
            <figure className="absolute h-auto" style={{ top: '8.5%', right: '0', width: '32.55%', maxWidth: '250px'}} data-aos="fade-left" data-aos-delay="200">
              <img src="https://fsmur.no/addons/fsmur/themes/fsmur/img/omoss2.jpg" width="250" height="188" alt="Team mosaic 03" />
            </figure>
            <figure className="absolute h-auto" style={{ top: '8.6%', right: '60%', width: '25.52%', maxWidth: '196px' }} data-aos="fade-up" data-aos-delay="300">
              <img src="https://fsmur.no/addons/fsmur/themes/fsmur/img/omoss.jpg" width="196" height="196" alt="Team mosaic 04" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamImages;