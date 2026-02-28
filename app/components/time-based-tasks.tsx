import { useState } from 'react';
import { View, Button, StyleSheet, SafeAreaView, TextInput, Pressable, Text } from 'react-native';

export function TimeBasedTask() {
    const [timeSpent, setTimeSpent] = useState(0);

    return (
        <View style={styles.container}>
                <Pressable
                    onPress={() => setTimeSpent(timeSpent - 1)}
                    style={({ pressed }) => [ // Style prop receives a function with 'pressed' boolean
                        styles.ButtonBase,
                        {
                        backgroundColor: pressed ? '#007062' : '#009688', // Darker when pressed
                        },
                        
                    ]}
                    disabled={timeSpent <= 0} // Disable the button if timeSpent is 0 or less
                    >
                    <Text style={styles.ButtonText}>-</Text>
                </Pressable>

                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setTimeSpent(parseInt(text) || 0)}
                        value={timeSpent.toString()}
                        placeholder="Enter a number"
                        keyboardType="numeric" // Displays the numeric keyboard
                    />
                </SafeAreaView>
            <Pressable
                    onPress={() => setTimeSpent(timeSpent + 1)}
                    style={({ pressed }) => [ // Style prop receives a function with 'pressed' boolean
                        styles.ButtonBase,
                        {
                        backgroundColor: pressed ? '#007062' : '#009688', // Darker when pressed
                        },
                    ]}
                    disabled={timeSpent >= 24} // Disable the button if timeSpent is 24 or more
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