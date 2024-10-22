import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext({});

function AuthProvider(props) {
  const [user, setUser] = useState({
    id_user: 4,
    name: "Miguel StackActions",
    email: "miguel@test.com",
    token: "kdfionmdskfjsdlknfgnvkisdufusds",
  });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
