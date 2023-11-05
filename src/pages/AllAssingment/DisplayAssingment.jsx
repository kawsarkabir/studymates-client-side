import PropTypes from "prop-types";
const DisplayAssingment = ({ assingment }) => {
    console.log(assingment);
    const {title, assingmentImgURL, description, mark, deoDate, difficultyLevel} = assingment || {}
  return (
    <div>
      <div className="card h-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={assingmentImgURL}
            alt="Shoes" className="max-w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{difficultyLevel}</div>
          </h2>
          <p>{description}</p>
          <p>Marks: {mark}  Deo Date: {deoDate} </p>
          <div className="card-actions justify-end">
            <button className="badge badge-outline">View Assingment</button>
            <button className="badge badge-outline">Update Assingment</button>
          </div>
        </div>
      </div>
    </div>
  );
};
DisplayAssingment.propTypes = {
    assingment: PropTypes.object.isRequired,
  };
export default DisplayAssingment;
