import React, { useState } from "react";
import { TextInput, Button, View, Text } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const success = await login(email, password);
    if (!success) {
      setError("Failed to login");
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
      <Button title="Login" onPress={handleLogin} />
      {error ? <Text>{error}</Text> : null}
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

export default LoginScreen;
