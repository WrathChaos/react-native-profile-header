import * as React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, { _container } from "./ProfileHeader.style";

interface IProps {
  height?: number | string;
  backgroundColor?: string;
  ImageComponent?: any;
}

interface IState {}

export default class ProfileHeader extends React.PureComponent<IProps, IState> {
  renderLeftAlignedComponent = () => {
    const { ImageComponent = Image } = this.props;
    return (
      <View
        style={{
          marginRight: "auto",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RNBounceable bounceEffect={0.8} bounceFriction={2} onPress={() => {}}>
          <ImageComponent
            source={require("./local-assets/left-arrow.png")}
            style={{ height: 25, width: 25 }}
          />
        </RNBounceable>
        {/* <View style={{ marginLeft: 8 }}>
          <Text>Profile Screen</Text>
        </View> */}
      </View>
    );
  };

  renderRightAlignedComponent = () => {
    const { ImageComponent = Image } = this.props;
    return (
      <View
        style={{
          marginLeft: "auto",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ marginRight: 24 }}>
          <RNBounceable
            bounceEffect={0.8}
            bounceFriction={2}
            onPress={() => {}}
          >
            <ImageComponent
              resizeMode="contain"
              source={require("./local-assets/search.png")}
              style={{ height: 18, width: 18 }}
            />
          </RNBounceable>
        </View>
        <View style={{ marginRight: 24 }}>
          <RNBounceable
            bounceEffect={0.8}
            bounceFriction={2}
            onPress={() => {}}
          >
            <ImageComponent
              resizeMode="contain"
              source={require("./local-assets/shopping-bag.png")}
              style={{ height: 18, width: 18 }}
            />
          </RNBounceable>
        </View>
        <RNBounceable onPress={() => {}}>
          <ImageComponent
            source={{
              uri:
                "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
            }}
            style={{ height: 50, width: 50, borderRadius: 12 }}
          />
        </RNBounceable>
      </View>
    );
  };
  render() {
    const { height = 50, backgroundColor = "#fff" } = this.props;

    return (
      <View style={_container(height, backgroundColor)}>
        {this.renderLeftAlignedComponent()}
        {this.renderRightAlignedComponent()}
      </View>
    );
  }
}
