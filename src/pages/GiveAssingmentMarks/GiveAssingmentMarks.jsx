import axios from "axios";
import { useLoaderData } from "react-router-dom";
import PDFViewer from "../../hooks/PDFViewer";

const GiveAssingmentMarks = () => {
  const giveMarks = useLoaderData();
  const { assingmentPDFLink, quickNote, title, _id } = giveMarks;

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
      <div className="w-1/2 text-center">
        <h1 className="font-bold text-2xl my-4">Gives Assingment Marks</h1>
        <div className="my-4">
          <div>
           <PDFViewer assingmentPDFLink={assingmentPDFLink}></PDFViewer>
          
          </div>
          <p>quickNote by examinee: {quickNote}</p>
        </div>
        <form onSubmit={handleGiveMarks}>
          <div className="flex flex-col p-4">
            <input
              name="marks"
              type="text"
              placeholder="marks"
              className="input input-bordered"
            />
            <textarea
              name="giveFeedback"
              className="textarea textarea-bordered my-4"
              placeholder="feedback"
              rows={2}
              cols={34}
            ></textarea>
            <button className="btn btn-outline">Give assingment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GiveAssingmentMarks;
