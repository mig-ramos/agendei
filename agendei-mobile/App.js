import Routes from "./src/routes/routes.js";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contexts/auth.js";

export default function App(props) {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
