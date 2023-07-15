import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  const setLikedCourses = props.setLikedCourses;

  function likeHandler() {
    if (likedCourses.includes(course.id)) {
      //if course is already liked and we want to remove the like from it
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Liked removed");
    } else {
      //the course is not liked yet
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className="w-[300px] bg-[#d6ccc2] bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt="Image" />

        <div
          className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center cursor-pointer"
          onClick={likeHandler}
        >
          <button>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize={"1.5rem"} />
            ) : (
              <FcLikePlaceholder fontSize={"1.5rem"} />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-[#023047] font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-[#14213d]">
          {!course.description.length < 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
