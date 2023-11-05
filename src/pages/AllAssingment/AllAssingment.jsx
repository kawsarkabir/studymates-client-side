import { useLoaderData } from "react-router-dom";
import DisplayAssingment from "./DisplayAssingment";

const AllAssingment = () => {
  const assingments = useLoaderData();

  return (
    <div className="max-w-screen-xl mx-auto mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
        {assingments?.map((assingment) => (
          <DisplayAssingment
            key={assingment._id}
            assingment={assingment}
          ></DisplayAssingment>
        ))}
      </div>
    </div>
  );
};

export default AllAssingment;
