import DisplayAssingment from "./DisplayAssingment";
import { useEffect, useState } from "react";
import axios from "axios";

const AllAssingment = () => {
  const [assingment, setAssingment] = useState([]);
  const [level, setLevel] = useState("default");
  //  pagination related code hre
  const [currentPage, setCurrentPage] = useState(0);
  // const [itemPerPage, setItemPerPage] = useState(6);
  const itemPerPage = 6;
  const [assingmentCount, setAssingmentCount] = useState(0);
  const numberOfPages = Math.ceil(assingmentCount / itemPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const handleChange = (e) => {
    setLevel(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/assingments?page=${currentPage}&size=${itemPerPage}`
      )
      .then((res) => {
        const loadedAssingment = res.data;
        if (level === "default") {
          setAssingment(loadedAssingment);
        } else {
          const filteredData = loadedAssingment.filter(
            (item) => item.difficultyLevel === level
          );
          setAssingment(filteredData);
        }
      });
  }, [level, currentPage, itemPerPage]);

  // Fetch the assignment count on component mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/assingmentsCount")
      .then((res) => {
        // Access the 'count' value from the response and set it in state
        setAssingmentCount(res.data.count);
      })
      .catch((error) => {
        console.error("fetching error assignment count:", error);
      });
  }, []);

  // handle items per pages
  // const handleItemPerPage = (e) => {
  //   const val = parseInt(e.target.value);
  //   setItemPerPage(val);
  //   setCurrentPage(0);
  // };
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-10 p-4">
      <div className="flex items-center gap-x-2">
        <h1 className="text-3xl font-extrabold my-10">
          Filtering By Difficulty Level
        </h1>
        <select
          onChange={handleChange}
          name="difficultyLevel"
          className="select select-bordered max-w-xs"
        >
          <option disabled selected>
            Filter
          </option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-6 gap-y-10">
        {assingment?.map((SingleAssingment) => (
          <DisplayAssingment
            assingment={assingment}
            setAssingment={setAssingment}
            key={SingleAssingment._id}
            SingleAssingment={SingleAssingment}
          ></DisplayAssingment>
        ))}
      </div>
      {/* paginations code */}
      <div className="my-20 flex gap-x-3 items-center justify-center">
        {/* <p>currentPage: {currentPage}</p> */}
        <button
          onClick={handlePrev}
          className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        {pages.map((page) => (
          <button
            className={
              currentPage === page
                ? "bg-[#FF6F61] text-white mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                : "mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            }
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNext}
          className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>

        {/* <select
          value={itemPerPage}
          onChange={handleItemPerPage}
          className="select select-bordered ml-6 max-w-xs"
        >
          <option value="5">3</option>
          <option value="10">6</option>
          <option value="15">9</option>
        </select> */}
      </div>
    </div>
  );
};

export default AllAssingment;
