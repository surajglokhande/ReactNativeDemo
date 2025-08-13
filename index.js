/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './rn_practice/Hooks/App';
import App from './rn_practice/rn_customComponent/CustomComponent'
// import App from "./rn_practice/rn_Modal/Modal";
// import App from './App';
// import App from "./rn_practice/rn_TextInput/App";
// import App from "./rn_practice/rn_FlatMap/FlatMap";
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
