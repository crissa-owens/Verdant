import {View, Text, StyleSheet, Image} from "react-native";
export default function App() {
    return (
        <View style ={{flex: 1, justifyContent:"center", alignItems:"center", backgroundColor: "lightslategrey"}}>
            <Image source={{uri: 'https://i.imgur.com/d11lUJY.png'}}
            style={{ width: 200, height: 200, }}/>
            <Text style = {{fontSize: 50}}>Loading...</Text>
            <Text style = {{fontSize: 20}}>Thank you for using Verdant!</Text>
        </View>
    );
}