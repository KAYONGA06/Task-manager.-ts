import { Router } from "express";
import{getTasks,addTask,updateTask,deleteTask} from '../controllers/tasksController';

const taskRouter =Router();

taskRouter.get('/getAll',getTasks);
taskRouter.post('/tasks/add-task',addTask);
taskRouter.delete('/delete-task/:id',deleteTask);
taskRouter.patch('/update/:id',updateTask)


export default taskRouter