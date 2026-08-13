import { View, Text, Button, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Pressable } from "react-native";
const registerBg = require("@/assets/images/register.jpg");
import { useRouter } from "expo-router";




export default function Register() {
    const router = useRouter()
    return (
        <ImageBackground source={registerBg} style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Register</Text>
                <TextInput style={styles.input} placeholder="Enter UsernName" placeholderTextColor="#26272aff"></TextInput>
                <TextInput style={styles.input} placeholder="Enter Email id" placeholderTextColor="#26272aff"></TextInput>
                <TextInput style={styles.input} placeholder="Enter Password" placeholderTextColor="#26272aff"></TextInput>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.replace("/login")}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <Pressable onPress={()=>router.replace("/login")}>
                    <Text style={styles.loginText}> Already Have an Account? Login</Text>
                </Pressable>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f1e6e9ff"
    },
    box: {
        width: "90%",
        padding: 20,
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        borderRadius: 20,
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        paddingBottom: 30,
        color: "#000000"
    },
    input: {
        borderWidth: 1.5,
        borderColor: "#536aa2ff",
        width: "100%",
        marginBottom: 20,
        borderRadius: 10,

    },
    button: {
        width: "100%",
        padding: 15,
        backgroundColor: "#757ccbff",
        borderRadius: 10,
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    loginText: {
        marginTop:10,
        color: "#555daeff",
        fontWeight: "bold",
    }

})