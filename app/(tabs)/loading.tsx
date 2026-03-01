import {Animated, View, Text, StyleSheet, Image} from "react-native";
import React, {useEffect, useReg, type PropsWithChildren} from 'react';

export default function App() {
    const straight = useRef(new Animated.)
    return (
        <View style ={{flex: 1, justifyContent:"center", alignItems:"center", backgroundColor: "lightslategrey"}}>
            <Image source={{uri: 'https://i.imgur.com/d11lUJY.png'}}
            style={{ width: 200, height: 200, }}/>
            <Text style = {{fontSize: 50}}>Loading...</Text>
            <Text style = {{fontSize: 20}}>Thank you for using Verdant!</Text>
        <Animated.View style={{transform: [{rotateY: this.state.rotateY}, {perspective: 1000},],}}/>
        </View>
    );
}