import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";

export default function Button(props){

    function TestClick(){
        Alert.alert("Clicou no Botão");
    }
    return <TouchableOpacity  onPress={TestClick}
    style={styles.btn} >
    <Text style={styles.text}>
        {props.text}
    </Text>
    </TouchableOpacity> 
   
}