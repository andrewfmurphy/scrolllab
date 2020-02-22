import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import CaroselView from "./components/CaroselView";
import InvitationCard from "./components/InvitationCard";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";

//Keep the data at the highest level and then
//have it flow to lower sub components.

//converted to functional component
export default class App extends React.Component {
  //Screen really only has two states
  //Month and events

  constructor(props) {
    super(props);
    this.state = {
      events: null
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      let response = await fetch(
        "https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/cards.json"
      );
      let parseObject = await response.json();
      //Setup call set State,

      this.setState({
        events: parseObject
      });
      console.log(this.state.events);
    };
    fetchData();
  }

  //AssignIDs and formats dates
  assignIDs(events) {
    return events.map((event, index) => {
      event.id = index;
      event.date = moment(event.date, "DD-MM-YYYY hh:mm:ss");
      return event;
    });
  }

  ////Method that filters Events Pending
  eventsPending(events) {
    return events.filter(event => {
      return event.accepted === undefined ? true : false;
    });
  }

  render() {
    //Rember to pass your pending events to the Carosel View.
    //Using the correct Prop.
    if (this.state.events == null) {
      return <View></View>;
    }
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 5, marginBottom: 10, height: 40, width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
          <Image style={{ width: 30, height: 30, marginLeft: 10, marginBottom: 10 }} source={require('./assets/icons/menu.png')}></Image>
          <Text style={{fontSize: 20}}>DinDin</Text>
          <Image style={{ width: 30, height: 30, marginRight: 10, marginBottom: 10 }} source={require('./assets/icons/search.png')}></Image>
        </View>
        
        <Text style={{ marginLeft: 20, marginBottom: 0}}>PENDING</Text>
        <LinearGradient colors={["#FFFFFF", "#D3DAEB", "#FFFFFF"]}>
        <CaroselView eventsData={this.state.events} />
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white"
  }
});
