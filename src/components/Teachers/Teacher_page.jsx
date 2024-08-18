import React from 'react';
import Breadcrums from '../Breadcrums';
import Teacher from '../Home/Teacher';
import TeacherInfo from '../../json_api/Teacher.json'
import Newsletter from '../Home/Newsletter'

function Teacher_page() {
  return (
    <>
       <Breadcrums data={{ headingName: "Meet Our Teachers", linkName: "Teachers" }} />
       <Teacher teacherClass={ {totalTeacher : TeacherInfo.length ,  bgClass:'teacher2' ,textColor:'text-grey', headingColor:'text-purple'}} />
       <Newsletter/>
       
    </>
  );
}

export default Teacher_page;
