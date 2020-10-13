<img alt="React Native Profile Header" src="assets/logo.png" width="1050"/>

[![Customizable Profile Header wih cool icons for React Native](https://img.shields.io/badge/-Customizable%20Profile%20Header%20wih%20cool%20icons%20for%20React%20Native-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-profile-header)

[![npm version](https://img.shields.io/npm/v/react-native-profile-header.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-profile-header)
[![npm](https://img.shields.io/npm/dt/react-native-profile-header.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-profile-header)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Profile Header"
        src="assets/Screenshots/RN-Profile-Header.gif" />
  <img alt="React Native Profile Header"
        src="assets/Screenshots/RN-Profile-Header.png" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-profile-header
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"@freakycoder/react-native-bounceable": "^0.1.1",
```

# Usage

## Import

```jsx
import ProfileHeader from "react-native-profile-header";
```

## Fundamental Usage

```jsx
<ProfileHeader />
```

# Configuration - Props

| Property                     |   Type    |  Default  | Description                                                                             |
| ---------------------------- | :-------: | :-------: | --------------------------------------------------------------------------------------- |
| onLeftButtonPress            | function  | undefined | set the logic for left aligned button                                                   |
| onProfilePicPress            | function  | undefined | set the logic for profile picture                                                       |
| onFirstIconPress             | function  | undefined | set the logic for first icon button                                                     |
| onSecondIconPress            | function  | undefined | set the logic for second icon button                                                    |
| onThirdIconPress             | function  | undefined | set the logic for third icon button                                                     |
| profileImageSource           |   image   |  default  | change the profile image source                                                         |
| leftAlignedButtonImageSource |   image   |  default  | change the left aligned button image source                                             |
| firstIconImageSource         |   image   |  default  | change the first icon image source                                                      |
| secondIconImageSource        |   image   |  default  | change the second icon image source                                                     |
| thirdIconImageSource         |   image   |  default  | change the third icon image source                                                      |
| titleText                    |  string   | undefined | change the title text                                                                   |
| height                       |  number   |    50     | change the profile header's height                                                      |
| backgroundColor              |   color   |   #fff    | change the profile header's background color                                            |
| leftButtonComponent          | component |   Image   | set your own component instead of default left aligned Button Image                     |
| disableFirstIcon             |  boolean  |   false   | disable the first icon                                                                  |
| disableSecondIcon            |  boolean  |   false   | disable the second icon                                                                 |
| disableThirdIcon             |  boolean  |   false   | disable the third icon                                                                  |
| disableLeftAlignedButton     |  boolean  |   false   | disable the left aligned icon                                                           |
| ImageComponent               | component |   Image   | set your own Image component instead of default react native Image such as; `FastImage` |
| style                        |   style   |  default  | set or override your own style instead of default one                                   |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Credits

Heavily Inspired by [Enes Kargıcı](https://dribbble.com/shots/6530185-Beats-Mobile-App-Concept-Design), thank you so much!

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Profile Header is available under the MIT license. See the LICENSE file for more info.
