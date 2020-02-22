import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import moment from "moment";

//Build out the invitation card component.
//It will be passed 3 props:
// prop.pic : last part of the url associated with the picture
//prop.name : the Name of person
//prop.date: The Date of the event
export default function InvationCard(props) {
  let imgsrc = "";

  switch (props.pic) {
    case "1.png":
      imgsrc =
        "https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/Images/1.png";
      break;
    case "2.png":
      imgsrc =
        "https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/Images/2.png";
      break;
    case "3.png":
      imgsrc =
        "https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/Images/3.png";
      break;
    case "4.png":
      imgsrc =
        "https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/Images/4.png";
      break;
    case "5.png":
      imgsrc =
        "https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/Images/5.png";
      break;
  }

  //Implement the format Date function
  function formatDate(date) {
    return moment(date, "dddd, D/M/YYYY, H:mm:ss").format(
      "dddd, d MMMM - h:mm A"
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
        <View style={{ marginTop: 0 }}>
          <Image
            source={{ uri: imgsrc }}
            style={{ width: 50, height: 50, marginLeft: 10, marginBottom: 10 }}
          />
        </View>
        <View style={{ marginLeft: 10, marginTop: 5 }}>
          <Text style={{ fontSize: 20 }}>{props.name}</Text>
          <Text style={{ color: "#AAAAAA" }}>{formatDate(props.date)}</Text>
        </View>
      </View>
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          paddingTop: 5,
          justifyContent: "space-around",
          borderTopWidth: 1,
          borderTopColor: "#DDDDDD"
        }}
      >
        <Button
          title="Accept"
          color="green"
          icon={<Icon name="arrow-right" size={15} color="blue" />}
        ></Button>
        <Button title="Decline" color="red"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    width: 315,
    height: 133,
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
  }
});
