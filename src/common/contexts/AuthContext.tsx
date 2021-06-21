import { createContext, useState } from "react";

export const AuthContext = createContext({} as any);

function AuthProvider(props: any) {
  const { children, initialLoggedInUser } = props;
  const [loggedInUser, setLoggedInUser] = useState(initialLoggedInUser);
  
  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };