import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import DisplayMyAssingment from "./DisplayMyAssingment";
import axios from "axios";

const MyAssingment = () => {
  const [assingment, setAssingment] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  useEffect(() => {
    axios
      .get(
        `https://online-group-study-management-server.vercel.app/submitedAssingment/complete?email=${user?.email}`,
        { withCredentials: true }
      )
      .then((res) => {
        setAssingment(res.data);
      });
    /*  fetch(
      `https://online-group-study-management-server.vercel.app/submitedAssingment/complete?email=${user?.email}`,
      { credentials: "include" }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAssingment(data);
      }); */
  }, [user]);

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {assingment.map((myAssingment) => (
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
