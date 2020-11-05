import React, { lazy, Suspense } from 'react';
const Header = lazy(() => import('../components/Header'));
const PageInfo = lazy(() => import('../components/PageInfo'));
const Contact = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));

function ContactUs() {
  return (
    <div>
    	<Suspense fallback={<div className="loader"></div>}>
      	<Header />
    	</Suspense>
    	<Suspense fallback={<div className="loader"></div>}>
	      <PageInfo title="Contact Us" bg="/assets/img/page-bg/4.jpg" />
    	</Suspense>
    	<Suspense fallback={<div className="loader"></div>}>
  	    <Contact />
    	</Suspense>
    	<Suspense fallback={<div className="loader"></div>}>
    	  <Footer />
    	</Suspense>
    </div>
  );
}

export default ContactUs;