import express from "express";
import {
  UserLogin,
  UserRegister,
  addWorkout,
  getUserDashboard,
  getWorkoutsByDate,
  deleteWorkout, 
  deleteTodaysWorkouts, 
  deleteWorkoutsByDate,
} from "../controllers/User.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();


router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

router.get("/dashboard", verifyToken, getUserDashboard);
router.get("/workout", verifyToken, getWorkoutsByDate);
router.post("/workout", verifyToken, addWorkout);
router.delete("/workout/:workoutId", verifyToken, deleteWorkout);
router.delete("/workout/today", verifyToken, deleteTodaysWorkouts);
router.delete("/workout/date", verifyToken, deleteWorkoutsByDate);

export default router;
