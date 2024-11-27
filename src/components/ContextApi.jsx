import { createContext } from "react";

export const AuthContext = createContext(null);

const ContextApi = ({ children }) => {
  console.log(children);
  const myInfo = { name: "Shohidul Arifin", age: 34 };
  return <AuthContext.Provider value={myInfo}>{children}</AuthContext.Provider>;
};

export default ContextApi;
