import { useLoaderData } from "react-router-dom";

const ViewAssingment = () => {
  const viewAssingment = useLoaderData();
  const {
    title,
    assingmentImgURL,
    description,
    marks,
    deoDate,
    difficultyLevel,
  } = viewAssingment || {};
  return (
    <div className="max-w-screen-xl mx-auto flex justify-center p-4">
      <div>
        <img src={assingmentImgURL} alt="" className="max-w-full" />
        
        <div className="space-y-2">
          <h1 className="font-extrabold text-4xl mt-4">
            {title}{" "}
            <span className="badge-warning badge">{difficultyLevel}</span>{" "}
          </h1>

          <p className="text-xl">
           <span className="font-bold"> Marks:</span> {marks} <span className="font-bold">Deo Date:</span> {deoDate}{" "}
          </p>
          <p className="text-xl">{description}</p>
        </div>
        <div>
          <button className="btn btn-outline mt-4">Take assingment</button>
        </div>
    
      </div>
    </div>
  );
};

export default ViewAssingment;
