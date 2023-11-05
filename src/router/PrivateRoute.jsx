import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(user?.email){
        return children;
    }
    if(loading){
        return <span className="loading loading-ring loading-4xl flex justify-center items-center max-h-screen"></span>
    }
   
    return <Navigate state={location.pathname} to={'/signin'}></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default PrivateRoute;