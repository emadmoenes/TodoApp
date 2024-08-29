import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import TaskInput from "../components/TaskInput";
import { getTasks } from "../utils/firebaseService";

const TaskScreen = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const tasksData = await getTasks();
    setTasks(tasksData);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <View>
      <TaskInput />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default TaskScreen;
