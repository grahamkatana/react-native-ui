import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
  } from "react-native";
  import { useState } from "react";
  
  const Settings = ({navigation}) => {
    const [email, setEmail] = useState("graykatanakenny@gmail.com");
    const [password, setPassword] = useState("katana@12345");
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Settings</Text>
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
          editable={false}
          defaultValue={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Cell"
          placeholderTextColor={"#000814"}
          editable={true}
          defaultValue={"0027629177503"}
        />
         <TextInput
          style={styles.input}
          placeholder="Location"
          placeholderTextColor={"#000814"}
          editable={true}
          defaultValue={"South Africa"}
        />
        
        <TouchableOpacity onPress={()=>navigation.navigate("Dashboard")} style={styles.btn}>
          <Text style={styles.btnText}>Update</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Settings;
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
  