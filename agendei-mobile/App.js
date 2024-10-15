import { Text, View } from 'react-native';
import Button from './src/components/button/button';

export default function App(props) {
  return (
    <View>
      <Text>Jornada JS!</Text>
      <Button text="Login" />
    </View>
  );
}
