/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './rn_practice/rn_redux/Store';

// import App from "./rn_practice/rn_navigation/CategoriesScreen";
import App from './rn_practice/Hooks/App';
// import ReduxApp from "./rn_practice/rn_redux/App";
// const App = () => (
//     <Provider store={store}>
//         <ReduxApp />
//     </Provider>
// )
// import App from './rn_practice/rn_customComponent/CustomComponent'
// import App from "./rn_practice/rn_Modal/Modal";
// import App from './App';
// import App from "./rn_practice/rn_TextInput/App";
// import App from "./rn_practice/rn_FlatMap/FlatMap";
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
