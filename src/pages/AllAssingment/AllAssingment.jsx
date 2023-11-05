import { useLoaderData } from "react-router-dom";
import DisplayAssingment from "./DisplayAssingment";
// import { useEffect, useState } from "react";

const AllAssingment = () => {
  const assingments = useLoaderData();
  // const [level, setLevel] = useState("");
 /*  useEffect(() => {
    fetch(`http://localhost:5000/assingments/${assingments.difficultyLevel}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLevel(data)
        const filteringData = level?.filter(filterItem=> filterItem.difficultyLevel === assingments.difficultyLevel);
        console.log(filteringData);
      });
  }, [level,assingments?.difficultyLevel, ]); */

  return (
    <div className="max-w-screen-xl mx-auto mb-10 p-4">
      <div className="flex items-center gap-x-2">
        <h1 className="text-3xl font-extrabold my-10">
          Filtering By Difecult Level
        </h1>
        <select
          name="difficultyLevel"
          className="select select-bordered max-w-xs"
        >
          <option disabled selected>
            Filter
          </option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-6 gap-y-10">
        {assingments?.map((assingment) => (
          <DisplayAssingment
            key={assingment._id}
            assingment={assingment}
          ></DisplayAssingment>
        ))}
      </div>
    </div>
  );
};

export default AllAssingment;
