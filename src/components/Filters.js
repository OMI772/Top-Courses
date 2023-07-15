import React from "react";

const Filters = (props) => {
  const category = props.category;
  const setCategory = props.setCategory;
  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {props.filterData.map((data) => {
        return (
          <button
            className={`text-lg px-2 py-1 rounded-md font-medium 
            text-bgdark bg-[#d5bdaf] hover:bg-opacity-50 border-2 transition-all duration-300 ${
              category === data.title
                ? "bg-opacity-60 border-[#d5bdaf] border-2"
                : "bg-opacity-40 border-transparent"
            }`}
            key={data.id}
            onClick={() => {
              filterHandler(data.title);
            }}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filters;
