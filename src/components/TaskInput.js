import React, { useState } from "react";
import { TextInput, Button, View } from "react-native";
import { addTask } from "../utils/firebaseService";

const TaskInput = () => {
  const [task, setTask] = useState("");

  const handleAddTask = async () => {
    if (task) {
      await addTask({ text: task });
      setTask("");
    }
  };

  return (
    <View>
      <TextInput value={task} onChangeText={setTask} placeholder="Enter task" />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

export default TaskInput;
