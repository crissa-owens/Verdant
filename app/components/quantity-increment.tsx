import { useState } from 'react';
import { View, Button, StyleSheet, SafeAreaView, TextInput, Pressable, Text } from 'react-native';

interface QuantityIncrementProps {
    quantity: number;
    setQuantity: (newQuantity: number) => void;
}
export function QuantityIncrement({ quantity, setQuantity }: QuantityIncrementProps) {

    return (
        <View style={styles.container}>
                <Pressable
                    onPress={() => setQuantity(quantity - 1)}
                    style={({ pressed }) => [ // Style prop receives a function with 'pressed' boolean
                        styles.ButtonBase,
                        {
                        backgroundColor: pressed ? '#007062' : '#009688', // Darker when pressed
                        },
                        
                    ]}
                    disabled={quantity <= 0} // Disable the button if quantity is 0 or less
                    >
                    <Text style={styles.ButtonText}>-</Text>
                </Pressable>

                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setQuantity(parseInt(text) || 0)}
                        value={quantity.toString()}
                        placeholder="0"
                        keyboardType="numeric" // Displays the numeric keyboard
                    />
                </SafeAreaView>
            <Pressable
                    onPress={() => setQuantity(quantity + 1)}
                    style={({ pressed }) => [ // Style prop receives function with 'pressed' boolean
                        styles.ButtonBase,
                        {
                        backgroundColor: pressed ? '#007062' : '#009688', // Darker when pressed
                        },
                    ]}
                    disabled={quantity >= 100} // Disable the button if quantity is 100 or more
                    >
                    <Text style={styles.ButtonText}>+</Text>
                </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    gap: 10,
  },
  input: {
    height: 40,
    borderColor: '#808080',
    borderWidth: 1,
    minWidth: 40,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  ButtonBase: {
    elevation: 8,
    borderRadius: 10,
    height: 40,
    minWidth: 40,
    justifyContent: 'center',
  },
  ButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});