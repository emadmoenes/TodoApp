import React, { useState } from "react";
import { TextInput, Button, View, Text } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    const success = await signup(email, password);
    if (!success) {
      setError("Failed to signup");
    }
  };

  return (
    <View>
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Signup" onPress={handleSignup} />
      {error ? <Text>{error}</Text> : null}
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default SignupScreen;
