import { createContext } from "react";
import { app } from "../Components/Firebase/firebase.config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const Provider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    loading,
    login,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
