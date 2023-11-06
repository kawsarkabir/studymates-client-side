import { useLoaderData } from "react-router-dom";
import DisplayMyAssingment from "./DisplayMyAssingment";

const MyAssingment = () => {
  const completeAssingment = useLoaderData();
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {completeAssingment.map((myAssingment) => (
          <DisplayMyAssingment
            key={myAssingment._id}
            myAssingment={myAssingment}
          ></DisplayMyAssingment>
        ))}
      </div>
    </div>
  );
};

export default MyAssingment;
