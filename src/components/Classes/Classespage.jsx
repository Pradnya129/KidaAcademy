import React from 'react'
import Breadcrums from '../Breadcrums';
import Popularclasses from '../Home/Popularclasses';
import classInfo from '../../json_api/Classes.json'
import Newsletter from '../Home/Newsletter';

function Classespage() {
  return (
    <>
 <Breadcrums data={{ headingName: "Our Popular Classes", linkName: "Classes" }} />
 <Popularclasses classNo={classInfo.length}/>
 <Newsletter/>
    </>
  )
}

export default Classespage
