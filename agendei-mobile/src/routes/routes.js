import { View } from "react-native";
import RoutesPrivate from "./routesPrivate.js";
import RoutesOpen from "./routesOpen.js";

function Routes() {
  const user = {
    // id_user: 1,
  };
  return user.id_user ? <RoutesPrivate /> : <RoutesOpen />;
}

export default Routes;
