import Routes from "./src/routes/routes.js";
import { NavigationContainer } from "@react-navigation/native";

export default function App(props) {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
