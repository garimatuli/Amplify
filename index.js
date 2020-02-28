/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';

import awsmobile from './aws-exports';
API.configure(awsmobile);             // Configure Amplify
PubSub.configure(awsmobile);

AppRegistry.registerComponent(appName, () => App);
