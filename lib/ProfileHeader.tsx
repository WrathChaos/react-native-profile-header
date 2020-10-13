import * as React from "react";
import { Text, Image, View } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, { _container } from "./ProfileHeader.style";

const defaultProfilePicture = {
  uri:
    "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
};
const searchIcon = require("./local-assets/search.png");
const bagIcon = require("./local-assets/shopping-bag.png");
const notificationIcon = require("./local-assets/notification.png");

export interface ISource {
  source: string | { uri: string };
}

export interface IProfileHeaderProps {
  style?: any;
  titleText?: string;
  ImageComponent?: any;
  height?: number | string;
  backgroundColor?: string;
  disableFirstIcon?: boolean;
  disableSecondIcon?: boolean;
  disableThirdIcon?: boolean;
  disableLeftAlignedButton?: boolean;
  leftButtonComponent?: React.ReactChild;
  profileImageSource?: ISource;
  firstIconImageSource?: ISource;
  secondIconImageSource?: ISource;
  thirdIconImageSource?: ISource;
  leftAlignedButtonImageSource?: ISource;
  onLeftButtonPress?: () => void;
  onProfilePicPress?: () => void;
  onFirstIconPress?: () => void;
  onSecondIconPress?: () => void;
  onThirdIconPress?: () => void;
}

interface IState {}

export default class ProfileHeader extends React.PureComponent<
  IProfileHeaderProps,
  IState
> {
  renderLeftAlignedComponent = () => {
    const {
      titleText,
      leftButtonComponent,
      disableLeftAlignedButton = false,
      leftAlignedButtonImageSource = require("./local-assets/left-arrow.png"),
      ImageComponent = Image,
      onLeftButtonPress,
    } = this.props;
    return (
      <View style={styles.leftAlignedContainer}>
        {!disableLeftAlignedButton && (
          <RNBounceable
            bounceEffect={0.8}
            bounceFriction={2}
            onPress={onLeftButtonPress}
          >
            {leftButtonComponent || (
              <ImageComponent
                source={leftAlignedButtonImageSource}
                style={styles.leftAlignedButtonImageStyle}
              />
            )}
          </RNBounceable>
        )}
        <View style={styles.titleContainer}>
          <Text style={styles.titleTextStyle}>{titleText}</Text>
        </View>
      </View>
    );
  };

  renderFirstIcon = () => {
    const {
      disableFirstIcon = false,
      onFirstIconPress,
      ImageComponent = Image,
      firstIconImageSource = searchIcon,
    } = this.props;
    return (
      !disableFirstIcon && (
        <View style={styles.iconButtonContainer}>
          <RNBounceable
            bounceEffect={0.8}
            bounceFriction={2}
            onPress={onFirstIconPress}
          >
            <ImageComponent
              resizeMode="contain"
              source={firstIconImageSource}
              style={styles.iconImageStyle}
            />
          </RNBounceable>
        </View>
      )
    );
  };

  renderSecondIcon = () => {
    const {
      onSecondIconPress,
      ImageComponent = Image,
      disableSecondIcon = false,
      secondIconImageSource = bagIcon,
    } = this.props;

    return (
      !disableSecondIcon && (
        <View style={styles.iconButtonContainer}>
          <RNBounceable
            bounceEffect={0.8}
            bounceFriction={2}
            onPress={onSecondIconPress}
          >
            <ImageComponent
              resizeMode="contain"
              source={secondIconImageSource}
              style={styles.iconImageStyle}
            />
          </RNBounceable>
        </View>
      )
    );
  };

  renderThirdIcon = () => {
    const {
      onThirdIconPress,
      ImageComponent = Image,
      disableThirdIcon = false,
      thirdIconImageSource = notificationIcon,
    } = this.props;
    return (
      !disableThirdIcon && (
        <View style={styles.iconButtonContainer}>
          <RNBounceable
            bounceEffect={0.8}
            bounceFriction={2}
            onPress={onThirdIconPress}
          >
            <ImageComponent
              resizeMode="contain"
              source={thirdIconImageSource}
              style={styles.iconImageStyle}
            />
          </RNBounceable>
        </View>
      )
    );
  };

  renderProfilePicture = () => {
    const {
      onProfilePicPress,
      ImageComponent = Image,
      profileImageSource = defaultProfilePicture,
    } = this.props;
    return (
      <RNBounceable onPress={onProfilePicPress}>
        <ImageComponent
          source={profileImageSource}
          style={styles.profileImageStyle}
        />
      </RNBounceable>
    );
  };

  renderRightAlignedComponent = () => {
    return (
      <View style={styles.rightAlignedContainer}>
        {this.renderFirstIcon()}
        {this.renderSecondIcon()}
        {this.renderThirdIcon()}
        {this.renderProfilePicture()}
      </View>
    );
  };
  render() {
    const { style, height = 50, backgroundColor = "#fff" } = this.props;
    return (
      <View style={[_container(height, backgroundColor), style]}>
        {this.renderLeftAlignedComponent()}
        {this.renderRightAlignedComponent()}
      </View>
    );
  }
}
