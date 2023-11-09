import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const UpdateAssingment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loadedAssingment = useLoaderData();
  console.log(loadedAssingment);
  const {
    title,
    assignmentImgURL,
    description,
    marks,
    dueDate,
    difficultyLevel,
    _id,
  } = loadedAssingment;
  const { user } = useContext(AuthContext);
  const handleUpdateAssingment = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const assignmentImgURL = form.assignmentImgURL.value;
    const marks = form.Marks.value;
    const difficultyLevel = form.difficultyLevel.value;
    const dueDate = form.dueDate.value;
    const assingmentOwner = user?.email;
    const assingmentUpdateInfo = {
      title,
      description,
      assignmentImgURL,
      marks,
      difficultyLevel,
      dueDate,
      assingmentOwner,
    };
    fetch(`http://localhost:5000/assingments/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(assingmentUpdateInfo),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "success!",
          text: "Assingment Update Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(location?.state ? location.state : "/allAssingment");
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold my-5 text-center">
        Update Assingment
      </h1>
      <div className="">
        <form
          onSubmit={handleUpdateAssingment}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center mt-10"
        >
          <input
            name="title"
            type="text"
            defaultValue={title}
            placeholder="Title"
            className="input input-bordered input-md w-full max-w-md"
          />
          <input
            name="description"
            type="text"
            defaultValue={description}
            placeholder="Description"
            className="input input-bordered input-md w-full max-w-md"
          />
          <input
            name="assignmentImgURL"
            type="text"
            defaultValue={assignmentImgURL}
            placeholder="Assingment imgURL"
            className="input input-bordered input-md w-full max-w-md"
          />
          <input
            name="Marks"
            type="text"
            defaultValue={marks}
            placeholder="Marks"
            className="input input-bordered input-md w-full max-w-md"
          />
          <select
            defaultValue={difficultyLevel}
            name="difficultyLevel"
            className="select select-bordered w-full max-w-md"
          >
            <option disabled selected>
              Assignment Difficulty Level
            </option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <input
            name="dueDate"
            type="date"
            defaultValue={dueDate}
            placeholder="Deo Date"
            className="input input-bordered input-md w-full max-w-md"
          />
          <div className="col-span-2">
            <button className="btn btn-wide">Update Assingment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAssingment;
