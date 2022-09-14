import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fleet.IO</Text>
      <Image
        style={styles.image}
        source={require("../assets/images/onboarding.png")}
      />
      <Text style={styles.intro}>We organize your transportation needs from warehousing to delivery!We are a modern logistic company that operates like Uber...</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.btn}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    height: 240,
    width: '98%',
    marginHorizontal:20,
  },
  header:{
    fontSize:28,
    margin:20,
  },
  intro:{
    textAlign:'center',
    padding:10,
    fontSize:20,
    color:'#2b4162',
    margin:20,

  }
});
