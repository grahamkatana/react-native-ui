import { View, Text ,StyleSheet,Image,TextInput, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { FontAwesome } from "@expo/vector-icons";

const Request = ({ route, navigation }) => {
    const [height, setHeight] = useState(55);
    const [messageText, setMessageText] = useState("");
    const { data} = route.params;
    console.log(data.image)
  return (
    <View style={styles.container}>
      <View style={{flex:1,backgroundColor:'#fff'}}>
      <Image
          style={styles.image}
          source={data.image}
        />
      <Text style={styles.header}>{data.question}</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row'}}>
      <TextInput
                
                  defaultValue={messageText}
                  onChangeText={(text) => setMessageText(text)}
                  multiline
                  style={{ ...styles.input, height: height }}
                  placeholder="Type your response..."
                  onContentSizeChange={(e) =>
                    setHeight(e.nativeEvent.contentSize.height)
                  }
                />
                <TouchableOpacity style={styles.btn}>
                <FontAwesome name={"send"} size={32} color={"#efefef"} />

                </TouchableOpacity>
                 
      </View>
    </View>
  )
}

export default Request
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding:10
      
    //   alignItems: "center",
    //   justifyContent: "center",
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
    width: "10%",
    height: 42,
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
      fontSize:20,
    }
  });