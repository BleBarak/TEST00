import { StyleSheet,Button, Text, View,TouchableOpacity, Image, ImageBackground } from "react-native";
import React from "react";


export default function SignUp ({navigation}){
    return(
         <ImageBackground source={require('../assets/images/keys.jpg')} style={styles.main}> 
        <Text style={styles.headerText}>WELCOME TO [Application Name]</Text>
        <Text style={styles.subHeader}>
        welcome to [Application name]. to sign up & register click the button below. we hope you enjoy your stay.
        </Text>
        <TouchableOpacity  style={styles.Button} >
        <Text onPress={() => navigation.navigate("Welcome")}>
            Get Started
        </Text>
        </TouchableOpacity>
        </ImageBackground>
    );

}
const styles = StyleSheet.create({
    main: {
        flex: 1, 
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.9,
    },

    Button: {
        height: 40,
        width: "50%",
        backgroundColor: "green",
        textAlign: "center",
        justifyContent: "center",
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 100,
        marginTop: 35,
    },
    headerText: {
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 75,
        letterSpacing: 1.2,
    },
    subHeader: {
        alingItems: 'center',
        justifyContent: 'center',
        fontSize: 27,
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 10,
        letterSpacing: 1,
    }
})
