import axios from "axios";

const API = axios.create({
  baseURL: "https://wellnest-server.onrender.com/api/",
});

export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async (token) =>
  API.get(`/user/dashboard`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, date) =>
  await API.get(`/user/workout/${date }`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (token, data) =>
  await API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });


  export const deleteWorkout = async (token, workoutId) =>
  API.delete(`/user/workout/${workoutId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  // eslint-disable-next-line no-unused-vars
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
};
