import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DisplaySubmitedAssingment = ({ submitAss }) => {
  const {
    submitedUserName,
    assingmentStatus,
    marks,
    title,
    _id
  } = submitAss || {};

  return (
    <div>
      <div className="card w-96 bg-base-100 drop-shadow">
        <div className="card-body">
          <h2 className="card-title font-extrabold">
            {title}
            <div className="badge bg-[#FF6F61] text-white">
              {assingmentStatus}
            </div>
          </h2>
          <p>
            <span className="font-bold">Assingment Marks:</span> {marks}
          </p>
          <p>
            <span className="font-bold">Examinee Name:</span> {submitedUserName}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/submitedAssingment/${_id}`}>
              <button className="btn btn-outline btn-sm">Give mark</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
DisplaySubmitedAssingment.propTypes = {
  submitAss: PropTypes.object.isRequired,
};
export default DisplaySubmitedAssingment;
