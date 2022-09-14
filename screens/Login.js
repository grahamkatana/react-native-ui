import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
  } from "react-native";
  import { useState } from "react";
  
  const Login = ({navigation}) => {
    const [email, setEmail] = useState("graykatanakenny@gmail.com");
    const [password, setPassword] = useState("katana@12345");
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <Image
          style={styles.image}
          source={require("../assets/images/welcome.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          textContentType="emailAddress"
          placeholderTextColor={"#000814"}
          onChangeText={(text) => setEmail(text)}
          editable={true}
          defaultValue={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          textContentType="password"
          placeholderTextColor={"#000814"}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          editable={true}
          defaultValue={password}
        />
        <TouchableOpacity onPress={()=>navigation.navigate("Dashboard")} style={styles.btn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Login;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      backgroundColor: "#e5e5e5",
      width: "90%",
      borderColor: "#e5e5e5",
      height: 55,
      padding: 10,
      fontSize: 18,
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 10,
    },
    btn: {
      backgroundColor: "#2b4162",
      width: "90%",
      height: 55,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    btnText: {
      color: "#fff",
      fontWeight: "600",
      fontSize: 18,
    },
    image: {
      height: 320,
      width: '98%',
    },
    header:{
      fontSize:28,
    }
  });
  