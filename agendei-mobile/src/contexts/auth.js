import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext({});

function AuthProvider(props) {
  const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
