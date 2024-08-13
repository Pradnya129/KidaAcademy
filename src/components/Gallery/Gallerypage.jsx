import React from 'react';
import Breadcrums from '../Breadcrums';
import Newsletter from '../Home/Newsletter';
import AllGallery from './AllGallery';

function Gallerypage() {

  return (
    <>
      <Breadcrums data={{ headingName: "Our School Gallery", linkName: "Gallery" }} />
      <AllGallery/>
      <Newsletter/>
    </>
  );
}

export default Gallerypage;
