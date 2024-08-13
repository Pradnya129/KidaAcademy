import React from 'react';
import Breadcrums from '../Breadcrums';
import Newsletter from '../Home/Newsletter';
import ContactUs from './ContactUs';

function Contactpage() {

  return (
    <>
       <Breadcrums data={{ headingName: "Our Contact Info", linkName: "Contact us" }} />
       <ContactUs/>
       <Newsletter/>
    </>
  );
}

export default Contactpage;
