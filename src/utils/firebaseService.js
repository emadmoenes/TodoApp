import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const tasksCollection = collection(db, "tasks");

export const addTask = async (task) => {
  try {
    await addDoc(tasksCollection, task);
  } catch (e) {
    console.error("Error adding task:", e);
  }
};

export const getTasks = async () => {
  try {
    const querySnapshot = await getDocs(tasksCollection);
    const tasks = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return tasks;
  } catch (e) {
    console.error("Error fetching tasks:", e);
    return [];
  }
};
