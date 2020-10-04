import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import ProfileHeader from "./lib/ProfileHeader";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ProfileHeader />
      </SafeAreaView>
    </>
  );
};

export default App;
