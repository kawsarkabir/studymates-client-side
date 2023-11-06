import axios from "axios";
import { useLoaderData } from "react-router-dom";

const GiveAssingmentMarks = () => {
  const giveMarks = useLoaderData();
  const { title, _id } = giveMarks;

  const handleGiveMarks = (e) => {
    e.preventDefault();
    const form = e.target;
    const ObtainMarks = form.marks.value;
    const giveFeedback = form.giveFeedback.value;
    const marksInfo = {
      assingmentStatus: "complete",
      title,
      ObtainMarks,
      giveFeedback,
    };

    axios
      .patch(`http://localhost:5000/submitedAssingment/${_id}`, marksInfo)
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto flex justify-center">
      <div className="modal-box text-center">
        <h1 className="font-bold text-2xl my-4">Gives Assingment Marks</h1>
        <form onSubmit={handleGiveMarks}>
          <div>
            <input
              name="marks"
              type="text"
              placeholder="marks"
              className="input input-bordered w-full max-w-xs"
            />
            <textarea
              name="giveFeedback"
              className="textarea textarea-bordered my-4"
              placeholder="feedback"
              rows={2}
              cols={34}
            ></textarea>
            <button className="btn btn-outline">Submit assingment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GiveAssingmentMarks;
