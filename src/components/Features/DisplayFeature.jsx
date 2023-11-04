import PropTypes from "prop-types";
const DisplayFeature = ({ feature }) => {
  const { img, title, description } = feature || {};
  return (
    <div>
      <div className="card">
        <img src={img} alt="Shoes" />
        <div className="card-body items-center text-center">
          <h2 className="font-bold text-2xl"> {title}</h2>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};
DisplayFeature.propTypes = {
  feature: PropTypes.object.isRequired,
};
export default DisplayFeature;
