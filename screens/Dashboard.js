import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
const options = [
  {
    id: "1",
    name: "Horses",
    image: require("../assets/images/horse.png"),
    question:'How many trucks are you looking for?'
  },
  {
    id: "2",
    name: "Trailers",
    image: require("../assets/images/trailers.png"),
    question:'How many trailers are you looking for?'
  },
  {
    id: "3",
    name: "Trucks + Trailers",
    image: require("../assets/images/welcome.png"),
    question:'How many fleet are you looking for?'
  },
  {
    id: "4",
    name: "Warehousing",
    image: require("../assets/images/warehouse.png"),
    question:'What do you want to store?'
  },
  {
    id: "5",
    name: "Construction",
    image: require("../assets/images/tipper.png"),
    question:'What equipment are you looking for?'
  },
  {
    id: "6",
    name: "Marine",
    image: require("../assets/images/marine.png"),
    question:'What do you want to carry?'
  },
  {
    id: "7",
    name: "Small Trucks",
    image: require("../assets/images/small.png"),
    question:'How many trucks are you looking for?'
  },
  {
    id: "8",
    name: "Tankers",
    image: require("../assets/images/fuel.png"),
    question:'How many tankers are you looking for?'
  },
];

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%", margin: 10 }}>
        <View style={styles.header}>
          <Entypo onPress={()=>navigation.navigate('Settings')} name="notification" size={28} color="#283618" />
          <Text style={{ fontSize: 22, color: "#283618" }}>Dashboard</Text>
          <Image
            style={styles.image}
            source={require("../assets/images/profile.png")}
          />
        </View>
        <FlatList
          style={styles.main}
          numColumns={2}
          data={options}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              navigation.navigate('Request', {
                data: item,
              });
            }} style={styles.gridStyle}>
              <Text
                style={{
                  fontWeight: "700",
                  position: "absolute",
                  right: 10,
                  color: "#2b4162",
                  bottom: 10,
                  zIndex: 10,
                }}
              >
                {item.name}
              </Text>
              <Image style={styles.itemImage} source={item.image} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#fff",
    height: 80,
    marginTop: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  main: {
    backgroundColor: "#fff",
    // flex: 1,
    marginBottom:30,
  },
  gridStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 160,
    margin: 8,
    marginTop: 15,
    backgroundColor: "#fff",
    borderColor: "#e5e5e5",
    borderWidth: 1,
    borderRadius: 10,
  },
  itemImage: {
    // width:'99%',
    // height:'100%',
    height: "78%",
    width: "78%",
  },
});
