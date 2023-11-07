import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const DisplayMyAssingment = ({ myAssingment }) => {
  const { title, ObtainMarks, assingmentStatus, giveFeedback, _id } =
    myAssingment || {};
  return (
    <div className="card w-96 bg-base-100 drop-shadow">
      <div className="card-body">
        <h2 className="card-title font-extrabold">
          {title}
          <div className="badge bg-[#FF6F61] text-white">
            {assingmentStatus}
          </div>
        </h2>
        <p>
          <span className="font-bold">Assingment Marks:</span> {ObtainMarks}
        </p>
        <p className="text-lg">{giveFeedback}</p>
      </div>
    </div>
  );
};
DisplayMyAssingment.propTypes = {
  myAssingment: PropTypes.object.isRequired,
};
export default DisplayMyAssingment;
