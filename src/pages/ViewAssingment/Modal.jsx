import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const Modal = ({ marks, title }) => {
  const { user } = useContext(AuthContext);
  const handleSubmitAssingment = (e) => {
    e.preventDefault();
    const form = e.target;
    const assingmentPDFLink = form.assingmentPDFLink.value;
    const quickNote = form.quickNote.value;
    const submitedUserEmail = user?.email;
    const submitedUserName = user?.displayName;

    const submitedAssingment = {
      assingmentPDFLink,
      quickNote,
      submitedUserEmail,
      submitedUserName,
      assingmentStatus: "pending",
      marks,
      title,
    };

    axios
      .post("http://localhost:5000/submitedAssingments", submitedAssingment, {
        withCredentials: true,
      })
      .then(() => {
        toast.success("submit your Assignment");
      });
  };
  return (
    <div>
      <dialog
        id="view_Assingment_modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box text-center">
          <h1 className="font-bold text-2xl my-4">Submit Your Assingment</h1>
          <form onSubmit={handleSubmitAssingment}>
            <div>
              <input
                name="assingmentPDFLink"
                type="text"
                placeholder="your assingment pdf link"
                className="input input-bordered w-full max-w-xs"
              />
              <textarea
                name="quickNote"
                className="textarea textarea-bordered my-4"
                placeholder="quote note"
                rows={2}
                cols={34}
              ></textarea>
              <button className="btn btn-outline">Submit assingment</button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <div className="absolute right-2 top-2">
                <button className="btn btn-circle btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
Modal.propTypes = {
  marks: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
};

export default Modal;
