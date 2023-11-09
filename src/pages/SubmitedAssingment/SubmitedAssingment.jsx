import { useLoaderData } from "react-router-dom";
import DisplaySubmitedAssingment from "./DisplaySubmitedAssingment";

const SubmitedAssingment = () => {
  const submitedAssingment = useLoaderData();

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="my-4 font-extrabold text-3xl text-center">
        Manage Pending Assingment
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-10">
        {submitedAssingment?.map((submitedAss) => (
          <DisplaySubmitedAssingment
            key={submitedAss._id}
            submitAss={submitedAss}
          ></DisplaySubmitedAssingment>
        ))}
      </div>
    </div>
  );
};

export default SubmitedAssingment;
