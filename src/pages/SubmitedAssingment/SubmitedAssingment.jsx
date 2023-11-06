import { useLoaderData } from "react-router-dom";

const SubmitedAssingment = () => {
  const submitedAssingment = useLoaderData();
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1>here is a submited asingmet: {submitedAssingment.length}</h1>
    </div>
  );
};

export default SubmitedAssingment;
