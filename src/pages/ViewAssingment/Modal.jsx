import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const Modal = () => {
  const { user } = useContext(AuthContext);
  const handleSubmitAssingment = (e) => {
    e.preventDefault();
    const form = e.target;
    const assingmentPDFLink = form.assingmentPDFLink.value;
    const quickNote = form.quickNote.value;
    const assingmentStatus = "pending";
    const submitedUser = user?.email;
    const submitedAssingment = {
      assingmentPDFLink,
      quickNote,
      submitedUser,
      assingmentStatus,
    };
    axios
      .post("http://localhost:5000/submitedAssingments", submitedAssingment)
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
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
