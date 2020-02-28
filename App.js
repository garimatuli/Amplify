


/*import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingPage from "./comps/LandingPage";
import SignUpPage from "./comps/SignUpPage";
import SignInPage from "./comps/SignInPage";
import HomePage from "./comps/HomePage";
import Disclosure from "./comps/Disclosure";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={LandingPage}
          options={{
            title: "Are you Ready?",
            headerStyle: {
              //backgroundColor: "#f4511e"
            },
            headerTintColor: "#68a0cf",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
        <Stack.Screen
          name="SignUpProgress"
          component={SignUpPage}
          options={{
            title: "Sign Up",
            headerStyle: {
              //backgroundColor: "#f4511e"
            },
            headerTintColor: "#68a0cf",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInPage}
          options={{
            title: "Sign In",
            headerStyle: {
              //backgroundColor: "#f4511e"
            },
            headerTintColor: "#68a0cf",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
        <Stack.Screen
                  name="Disclosure"
                  component={Disclosure}
                  options={{
                    title: "Terms and Privacy",
                    headerStyle: {
                      //backgroundColor: "#f4511e"
                    },
                    headerTintColor: "#68a0cf",
                    headerTitleStyle: {
                      fontWeight: "bold"
                    }
                  }}
                />
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/

import React, { useEffect, useReducer } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub';
import { createTodo } from './src/graphql/mutations';

import { listTodos } from './src/graphql/queries';
import { onCreateTodo } from './src/graphql/subscriptions';



async function createNewTodo() {
  const todo = { name: "Use AppSync" , description: "Realtime and Offline"}
  await API.graphql(graphqlOperation(createTodo, { input: todo }))
}

const initialState = {todos:[]};
const reducer = (state, action) =>{
  switch(action.type){
    case 'QUERY':
      return {...state, todos:action.todos}
    case 'SUBSCRIPTION':
      return {...state, todos:[...state.todos, action.todo]}
    default:
      return state
  }
}


export default function App() {
   const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
      getData()
       const subscription = API.graphql(graphqlOperation(onCreateTodo)).subscribe({
            next: (eventData) => {
              const todo = eventData.value.data.onCreateTodo;
              dispatch({type:'SUBSCRIPTION', todo})
            }
        })
        return () => subscription.unsubscribe()
    }, [])

    async function getData() {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      dispatch({type:'QUERY', todos: todoData.data.listTodos.items});
    }

    return (
      <View style={styles.container}>
        <Button onPress={createNewTodo} title='Create Todo' />
        { state.todos.map((todo, i) => <Text key={todo.id}>{todo.name} : {todo.description}</Text>) }
      </View>
    );
}

const styles = StyleSheet.create({
   container: {
     backgroundColor: '#ddeeff',
     alignItems: 'center',
     justifyContent: 'center',
     flex: 1
   }
 });