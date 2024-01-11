import axios from 'axios';
import { Task } from '../create-task-input/create-task-input.component';

const apiUrl = 'http://localhost:3004';
const tasksEndpoint = '/tasks';

export const getAllTasks = async () => {
  const taskUrl = apiUrl + tasksEndpoint;
  try {
    const { data } = await axios.get<Task[]>(taskUrl);
    return data;
  } catch (error) {
    console.error('Failed to fetch data', error);
    throw error;
  }
};

export const postTask = async (task: Task) => {
  const taskUrl = apiUrl + tasksEndpoint;
  try {
    await axios.post(taskUrl, task);
  } catch (error) {
    console.error('Failed to post task', error);
  }
};

export const editTaskById = async (task: Task) => {
  const taskUrl = apiUrl + tasksEndpoint + `/${task.id}`;
  try {
    await axios.put(taskUrl, task);
  } catch (error) {
    console.error('Failed to edit task', error);
  }
};

export const deleteTaskById = async (taskId: number) => {
  const taskUrl = apiUrl + tasksEndpoint + `/${taskId}`;
  try {
    await axios.delete(taskUrl);
  } catch (error) {
    console.error('Failed to delete task', error);
  }
};
