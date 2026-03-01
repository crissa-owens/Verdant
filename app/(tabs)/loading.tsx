import {Animated, View, Text, StyleSheet, Image} from "react-native";
import React, {useEffect, useRef,} from 'react';

const LoadingDots = () => {
    const dot1 = useRef(new Animated.Value(0)).current;
    const dot2 = useRef(new Animated.Value(0)).current;
    const dot3 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animate = () => {
            Animated.sequence([
                Animated.timing(dot1, { toValue: 1, duration: 400, useNativeDriver: true}),
                Animated.timing(dot2, { toValue: 1, duration: 400, useNativeDriver: true}),
                Animated.timing(dot3, { toValue: 1, duration: 400, useNativeDriver: true}),
            Animated.parallel([
                Animated.timing(dot1, { toValue: 0, duration: 400, useNativeDriver: true}),
                Animated.timing(dot2, { toValue: 0, duration: 400, useNativeDriver: true}),
                Animated.timing(dot3, { toValue: 0, duration: 400, useNativeDriver: true}),
            ]),
            ]).start(() => animate());
        };
        animate();
    }, );
    return (
         <View style={styles.container}>
            <Image source={{uri: 'https://i.imgur.com/d11lUJY.png'}}
            style={{ width: 200, height: 200, }}/>
            <Text style = {{fontSize: 50}}>Loading</Text>        
         <Animated.Text style={[styles.dot, { opacity: dot1 }]}>.</Animated.Text>
         <Animated.Text style={[styles.dot, { opacity: dot2 }]}>.</Animated.Text>
         <Animated.Text style={[styles.dot, { opacity: dot3 }]}>.</Animated.Text>
         <Text style = {{fontSize: 20}}>Thank you for using Verdant!</Text>
      </View>
      );
    };
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightslategrey',
  },
  dot: {
    fontSize: 40,
    fontWeight: 'bold',
    marginHorizontal: 2,
    color: 'black',
  },
});

export default LoadingDots;
//export default function App() {
//    return (
//        <View style ={{flex: 1, justifyContent:"center", alignItems:"center", backgroundColor: "lightslategrey"}}>
//            <Image source={{uri: 'https://i.imgur.com/d11lUJY.png'}}
//            style={{ width: 200, height: 200, }}/>
//            <Text style = {{fontSize: 50}}>Loading...</Text>
//            <Text style = {{fontSize: 20}}>Thank you for using Verdant!</Text>
//        </View>
//    );
//}