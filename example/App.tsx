import React from "react";
import { View, Text, Image, StatusBar, SafeAreaView } from "react-native";
import CounterInput from "react-native-counter-input";
import LinearGradient from "react-native-linear-gradient";
import ProfileHeader from "./build/dist/ProfileHeader";

const coloredNotification = require("./assets/notification-colored.png");
const notification = require("./assets/notification.png");

const App = () => {
  const [notificationIcon, setNotificationIcon] = React.useState(notification);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ProfileHeader
          thirdIconImageSource={notificationIcon}
          onThirdIconPress={() => {
            if (notificationIcon === notification)
              setNotificationIcon(coloredNotification);
            else setNotificationIcon(notification);
          }}
        />
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#1646af", "#0b2d80"]}
          style={{
            height: 450,
            width: "100%",
            marginTop: 32,
            borderTopLeftRadius: 48,
            borderBottomLeftRadius: 48,
          }}
        >
          <View style={{ margin: 32 }}>
            <Text style={{ fontSize: 40, fontWeight: "bold", color: "#fff" }}>
              Beats
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "300",
                color: "#fff",
                opacity: 0.7,
              }}
            >
              Warriors Royale Blue
            </Text>
            <Image
              resizeMode="contain"
              style={{ height: 300, width: 300, right: 40, top: 20 }}
              source={require("./assets/beats-warriors-royal-blue.png")}
            />
          </View>
          <View
            style={{
              top: 0,
              right: 0,
              bottom: 0,
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ marginLeft: "auto", marginRight: 24 }}>
              <CounterInput
                onChange={(counter) => {
                  console.log("onChange Counter:", counter);
                }}
              />
            </View>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </>
  );
};

export default App;
