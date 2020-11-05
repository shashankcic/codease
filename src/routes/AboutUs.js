import React, { lazy, Suspense } from 'react';
const Header = lazy(() => import('../components/Header'));
const PageInfo = lazy(() => import('../components/PageInfo'));
const About = lazy(() => import('../containers/About'));
const Footer = lazy(() => import('../components/Footer'));

function AboutUs() {
  return(
    <div>
    	<Suspense fallback={<div className="loader"></div>}>
      	<Header />
    	</Suspense>
    	<Suspense fallback={<div className="loader"></div>}>
      	<PageInfo title="About Us" bg="/assets/img/page-bg/5.jpg" />
      </Suspense>
    	<Suspense fallback={<div className="loader"></div>}>
      	<About />
      </Suspense>
    	<Suspense fallback={<div className="loader"></div>}>
      	<Footer />
    	</Suspense>
    </div>
  );
}

export default AboutUs;