import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const ViewAssingment = () => {
  const viewAssingment = useLoaderData();
  const {
    title,
    assignmentImgURL,
    description,
    marks,
    dueDate,
    difficultyLevel,
  } = viewAssingment || {};
  // modal handle
  const handleShowModal = () => {
    document.getElementById("view_Assingment_modal").showModal();
  };
  return (
    <div className="max-w-screen-xl mx-auto flex justify-center p-4 mb-10">
      <div>
        <img src={assignmentImgURL} alt="" className="max-w-3xl"  />

        <div className="space-y-2">
          <h1 className="font-extrabold text-4xl mt-4">
            {title}{" "}
            <span className="badge-warning badge">{difficultyLevel}</span>{" "}
          </h1>

          <p className="text-xl">
            <span className="font-bold"> Marks:</span> {marks}{" "}
            <span className="font-bold">Deo Date:</span> {dueDate}{" "}
          </p>
          <p className="text-xl">{description}</p>
        </div>
        <div>
          <button onClick={handleShowModal} className="btn btn-outline mt-4">
            Take assingment
          </button>
          <Modal title={title} marks={marks}></Modal>
        </div>
      </div>
    </div>
  );
};

export default ViewAssingment;
