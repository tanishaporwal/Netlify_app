import React, {useState} from 'react';
import Card from './Card';

const Cards = (props) => {
    const courses=props.courses;
    let category=props.category;
    const[likedCourses, setLikesCourses] = useState([]);
    
    function getCourses(){
      if(category==="All"){
        let allCourses =[];
        Object.values(courses).forEach( array => {
          array.forEach( courseData => {
              allCourses.push(courseData);
          })
      })
      return allCourses;
      }
      else{
        return courses[category];
      }
       
    }


  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
       {
        getCourses().map( (course) => {
        return(
        <Card key={courses.id}  course={course} likedCourses={likedCourses} setLikesCourses={setLikesCourses}/>)

       })
    }
      
    </div>
  )
}
export default Cards;
