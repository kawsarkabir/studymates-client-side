import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const DisplayAssingment = ({ SingleAssingment }) => {
  const {
    title,
    assingmentImgURL,
    description,
    marks,
    deoDate,
    difficultyLevel,
    _id,
  } = SingleAssingment || {};
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={assingmentImgURL} alt="Shoes" className="h-72" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-extrabold">
            {title}
            <div className="badge bg-[#FF6F61] text-white">
              {difficultyLevel}
            </div>
          </h2>
          <p className="text-lg">{description}</p>
          <p>
            <span className="font-bold">Deo Date:</span> {deoDate} <br />
            <span className="font-bold">Marks: </span> {marks}
          </p>
          <div className=" mt-5 gap-x-3 flex justify-end">
            <Link to={`/assingments/${_id}`}>
              <button className="btn btn-outline btn-sm">View Details</button>
            </Link>
            <Link to={`/updateAssingment/${_id}`}>
              <button className="btn btn-outline btn-sm">Update </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
DisplayAssingment.propTypes = {
  SingleAssingment: PropTypes.object.isRequired,
};
export default DisplayAssingment;
