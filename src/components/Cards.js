import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
  const [likedCourses, setLikedCourses] = useState([]);
  const courses = props.courses;
  const category = props.category;

  function bindAllCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {bindAllCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          ></Card>
        );
      })}
    </div>
  );
};

export default Cards;
