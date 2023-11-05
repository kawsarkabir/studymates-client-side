import { useLoaderData } from "react-router-dom";
import DisplayAssingment from "./DisplayAssingment";
import { useEffect, useState } from "react";
import axios from "axios";

const AllAssingment = () => {
  const loadingAssingments = useLoaderData();
  const [assingment, setAssingment] = useState(loadingAssingments);
  const [level, setLevel] = useState(null);

  const handleChange = (e) => {
    setLevel(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/assingments?difficultyLevel=${level}`)
      .then((res) => {
        setAssingment(res.data);
      });

    /* fetch(`http://localhost:5000/assingments?difficultyLevel=${level}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAssingment(data); */

    /*  const filteringData = level?.filter(
          (filterItem) =>
            filterItem.difficultyLevel === assingments.difficultyLevel
        );
        console.log(filteringData); */
    // });
  }, [level]);

  return (
    <div className="max-w-screen-xl mx-auto mb-10 p-4">
      <div className="flex items-center gap-x-2">
        <h1 className="text-3xl font-extrabold my-10">
          Filtering By Difecult Level
        </h1>
        <select
          onChange={handleChange}
          name="difficultyLevel"
          className="select select-bordered max-w-xs"
        >
          <option disabled selected>
            Filter
          </option>
          <option value={"Easy"}>Easy</option>
          <option value={"Medium"}>Medium</option>
          <option value={"Hard"}>Hard</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-6 gap-y-10">
        {assingment?.map((SingleAssingment) => (
          <DisplayAssingment
            key={SingleAssingment._id}
            SingleAssingment={SingleAssingment}
          ></DisplayAssingment>
        ))}
      </div>
    </div>
  );
};

export default AllAssingment;
