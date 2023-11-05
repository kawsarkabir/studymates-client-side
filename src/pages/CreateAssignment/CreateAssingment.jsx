import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const CreateAssingment = () => {
    const {user} = useContext(AuthContext)
  const handleCreateAssingment = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const assingmentImgURL = form.AssingmentImgURL.value;
    const marks = form.Marks.value;
    const difficultyLevel = form.difficultyLevel.value;
    const deoDate = form.deoDate.value;
    const assingmentOwner = user?.email;
    const assingmentCreateInfo = {
      title,
      description,
      assingmentImgURL,
      marks,
      difficultyLevel,
      deoDate,
      assingmentOwner
    };
    console.log(assingmentCreateInfo);
    fetch("http://localhost:5000/assingments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(assingmentCreateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "success!",
          text: "Successfully add your product",
          icon: "success",
          confirmButtonText: "Cool",
        });
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold my-5 text-center">
        Create Assingment
      </h1>
      <div className="">
        <form
          onSubmit={handleCreateAssingment}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center mt-10"
        >
          <input
            name="title"
            type="text"
            placeholder="Title"
            className="input input-bordered input-md w-full max-w-md"
          />
          <input
            name="description"
            type="text"
            placeholder="Description"
            className="input input-bordered input-md w-full max-w-md"
          />
          <input
            name="AssingmentImgURL"
            type="text"
            placeholder="Assingment imgURL"
            className="input input-bordered input-md w-full max-w-md"
          />
          <input
            name="Marks"
            type="text"
            placeholder="Marks"
            className="input input-bordered input-md w-full max-w-md"
          />
          <select
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
            name="deoDate"
            type="date"
            placeholder="Deo Date"
            className="input input-bordered input-md w-full max-w-md"
          />
          <div className="col-span-2">
            <button className="btn btn-wide">Create Assingment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAssingment;
