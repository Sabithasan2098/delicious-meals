import { createContext } from "react";

export const AuthContext = createContext(null);

const Provider = ({ children }) => {
  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
