import { Router } from "express";
import{getTasks,addTask,updateTask,deleteTask} from '../controllers/task';

const router :Router =Router();

router.get('/tasks',getTasks);
router.post('/tasks/add-task',addTask);
router.put('/delete-task/:id',deleteTask);
