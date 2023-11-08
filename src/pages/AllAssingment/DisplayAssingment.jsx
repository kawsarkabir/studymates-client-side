import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
const DisplayAssingment = ({ SingleAssingment, assingment, setAssingment }) => {
  const {
    title,
    assignmentOwner,
    assignmentImgURL,
    description,
    marks,
    dueDate,
    difficultyLevel,
    _id,
  } = SingleAssingment || {};
  const { user } = useContext(AuthContext);

  // handle delete assingment
  const handleDeleteAssingment = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed && assignmentOwner === user?.email) {
        fetch(`https://online-group-study-management-server.vercel.app/assingments/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your product has been deleted.", "success");
            const remainingAssingment = assingment.filter(
              (product) => product._id !== id
            );
            setAssingment(remainingAssingment);
          });
      } else {
        toast.error("you cannot deleted others create assingmet");
      }
    });
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={assignmentImgURL} alt="Shoes" className="h-72" />
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
            <span className="font-bold">Deo Date:</span> {dueDate} <br />
            <span className="font-bold">Marks: </span> {marks}
          </p>
          <div className=" mt-5 gap-x-3 flex justify-end">
            <Link to={`/assingments/${_id}`}>
              <button className="btn btn-outline btn-sm">View Details</button>
            </Link>

            <button
              onClick={() => handleDeleteAssingment(_id)}
              className="btn btn-outline btn-sm"
            >
              Delete{" "}
            </button>

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
  assingment: PropTypes.array.isRequired,
  setAssingment: PropTypes.func.isRequired,
};
export default DisplayAssingment;
