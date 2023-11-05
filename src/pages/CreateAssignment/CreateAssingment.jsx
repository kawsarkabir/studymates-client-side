import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";

const CreateAssignment = () => {
  const { user } = useContext(AuthContext);
  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const assignmentImgURL = form.assignmentImgURL.value;
    const marks = form.marks.value;
    const difficultyLevel = form.difficultyLevel.value;
    const dueDate = form.dueDate.value;
    const assignmentOwner = user?.email;

    // Validation
    const errors = {};

    if (!title.trim()) {
      errors.title = "Title is required";
    } else if (!/^[a-zA-Z\s]+$/.test(title)) {
      errors.title = "Title should only contain letters";
    }

    if (!description.trim()) {
      errors.description = "Description is required";
    } else if (!/^[a-zA-Z\s]+$/.test(description)) {
      errors.description = "Description should only contain letters";
    }

    if (!assignmentImgURL.trim()) {
      errors.assignmentImgURL = "Assignment Image URL is required";
    } else if (!/^[a-zA-Z\s]+$/.test(assignmentImgURL)) {
      errors.assignmentImgURL = "Invalid URL format";
    }

    if (!marks.trim()) {
      errors.marks = "Marks is required";
    } else if (isNaN(marks)) {
      errors.marks = "Marks must be a number";
    }

    if (Object.keys(errors).length > 0) {
      // Show toasts for each error
      Object.values(errors).forEach((error) => {
        toast.error(error);
      });
      return;
    }

    const assignmentCreateInfo = {
      title,
      description,
      assignmentImgURL,
      marks,
      difficultyLevel,
      dueDate,
      assignmentOwner,
    };

    fetch("http://localhost:5000/assignments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(assignmentCreateInfo),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Successfully created your Assignment");
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold my-5 text-center">
        Create Assignment
      </h1>
      <div className="">
        <form
          onSubmit={handleCreateAssignment}
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
            name="assignmentImgURL"
            type="text"
            placeholder="Assignment Image URL"
            className="input input-bordered input-md w-full max-w-md"
          />
          <input
            name="marks"
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
            name="dueDate"
            type="date"
            placeholder="Due Date"
            className="input input-bordered input-md w-full max-w-md"
          />
          <div className="col-span-2">
            <button className="btn btn-wide">Create Assignment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAssignment;
