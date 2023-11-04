import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../configs/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
     /*  const userEmail = currentUser?.email || user?.email;
      const logedUser = { email: userEmail }; */
      //  ==================== Generate Token if user is exits  ============
     /*  if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", logedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response", res.data);
          });
      } else {
        axios.post("http://localhost:5000/logOutWithclearCookie", logedUser, {
          withCredentials: true,
        });
      } */
      setUser(currentUser);
      console.log("current user observed", currentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  // create a new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   sign in
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   sign in with google
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //   signOUt
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const userInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
