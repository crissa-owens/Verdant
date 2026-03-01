import { ScrollView, Text, View, Image, TextInput, Pressable } from "react-native";
import { styles } from "../styles";
import React from "react";
import { NameContext } from "../context/name";

export default function Profile() {
    const [userExists, setUserExists] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [usernameInput, setUsernameInput] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordInput, setPasswordInput] = React.useState("");

    const [nameInput, setNameInput] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [emailInput, setEmailInput] = React.useState("");

    const contextValue = React.useContext(NameContext);

    function handleNameChange(text: string) {
        if (contextValue) {
            contextValue.setName(text);
        }
    }
        

    if (userExists){
        return (
                <ScrollView contentContainerStyle={styles.profile_styles}>
                    <View>
                        <Image 
                        source={{ uri: "https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp.png" }} 
                        style={{ width: 100, height: 100, marginBottom: 20, borderRadius: 50}}
                        resizeMode="cover" />
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center"}}>
                        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>Name is: {contextValue?.name}</Text>
                        <TextInput 
                            placeholder="Name" 
                            value={nameInput}
                            style={[styles.input_styles, { marginTop: 20 }]}
                            onChangeText={(text) => setNameInput(text)}
                        />
                        <TextInput 
                            placeholder="Email" 
                            value={emailInput}
                            style={[styles.input_styles, { marginTop: 20 }]}
                            onChangeText={(text) => setEmailInput(text)}
                        />
                        <Pressable
                            onPress={() => {handleNameChange(nameInput); setEmail(emailInput);}}
                            style={styles.button_styles}
                        >
                            <Text style={{ color: "white", fontWeight: "bold" }}>Update Profile</Text>
                        </Pressable>
                    </View>
                </ScrollView>
        )
    } else {
        return (
            <View style={styles.profile_styles}>
                <Image 
                    source={{ uri: "https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp.png" }} 
                    style={{ width: 100, height: 100, marginBottom: 20, borderRadius: 50}}
                    resizeMode="cover" />
                <Text>User not found. Please log in.</Text>
                <TextInput 
                    placeholder="Username" 
                    value={usernameInput}
                    style={[styles.input_styles, { marginTop: 20 }]}
                    onChangeText={(text) => setUsernameInput(text)}
                />
                <TextInput 
                    placeholder="Password" 
                    value={passwordInput}
                    style={[styles.input_styles, { marginTop: 20 }]}
                    onChangeText={(text) => setPasswordInput(text)}
                    secureTextEntry
                />
                <Pressable
                    onPress={() => {setUserExists(true); handleNameChange(nameInput); setEmail(emailInput);}}
                    style={styles.button_styles}
                >
                    <Text style={{ color: "white", fontWeight: "bold" }}>Log In</Text>
                </Pressable>
            </View>
        )
    }

}