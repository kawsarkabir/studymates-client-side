import DisplayAssingment from "./DisplayAssingment";
import { useEffect, useState } from "react";
import axios from "axios";
import "./AllAssingment.css";

const AllAssingment = () => {
  const [assingment, setAssingment] = useState([]);
  const [level, setLevel] = useState("default");
  //  pagination related code hre
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [assingmentCount, setAssingmentCount] = useState(0);
  const numberOfPages = Math.ceil(assingmentCount / itemPerPage);
  const pages = [...Array(numberOfPages).keys()];
  console.log("pages", pages);

  const handleChange = (e) => {
    setLevel(e.target.value);
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/assingments?page=${currentPage}&size=${itemPerPage}`).then((res) => {
      const loadedAssingment = res.data;
      console.log(loadedAssingment);
      if (level === "default") {
        setAssingment(loadedAssingment);
      } else {
        const filteredData = loadedAssingment.filter(
          (item) => item.difficultyLevel === level
        );
        console.log(filteredData);
        setAssingment(filteredData);
        console.log(filteredData);
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
  const handleItemPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemPerPage(val);
    console.log(val);
    setCurrentPage(0);
  };
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
      <div className="paginations mt-20 text-center">
        <p>currentPage: {currentPage}</p>
        <button onClick={handlePrev}>prev</button>
        {pages.map((page) => (
          <button
            className={currentPage === page ? "selected" : undefined}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNext}>next</button>

        <select
          value={itemPerPage}
          onChange={handleItemPerPage}
          className="select select-bordered ml-6 max-w-xs"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
    </div>
  );
};

export default AllAssingment;
