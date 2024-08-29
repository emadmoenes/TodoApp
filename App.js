import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthProvider, AuthContext } from "./src/contexts/AuthContext";
import TaskScreen from "./src/screens/TaskScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import { useContext } from "react";

const Stack = createStackNavigator();

const App = () => {
  // Ensure AuthProvider is wrapping NavigationContainer
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Task" component={TaskScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
