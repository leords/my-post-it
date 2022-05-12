import { Router } from "express";
import { CreateProjectController } from "./controllers/project/CreateProjectController";
import { DeleteProjectController } from "./controllers/project/DeleteProjectController";
import { ReadProjectController } from "./controllers/project/ReadProjectController";
import { UpdateProjectController } from "./controllers/project/UpdateProjectController";
import { CreateTaskController } from "./controllers/task/CreateTaskController";
import { DeleteTaskController } from "./controllers/task/DeleteTaskController";
import { ReadTaskController } from "./controllers/task/ReadTaskController";
import { UpdateTaskController } from "./controllers/task/UpdateTaskController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { ReadUserController } from "./controllers/user/ReadUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";


const router = Router();

//ROUTES USER.
router.post('/new-user', new CreateUserController().handle)
router.post('/edit-user', new UpdateUserController().handleEditName)
router.post('/delete-user', new DeleteUserController().handle)
//Read Retorno
router.get('/user-all', new ReadUserController().handleAll)
router.get('/user-unique', new ReadUserController().handleUnique)


//ROUTES TASK.
router.post('/new-task', new CreateTaskController().handle)
router.post('/delete-task', new DeleteTaskController().handle)
router.get('/edit-task-name', new UpdateTaskController().handleEditName)
router.get('/edit-task-description', new UpdateTaskController().handleEditDescription)
router.get('/edit-task', new UpdateTaskController().handleEditStatusFalse)
router.get('/edit-task', new UpdateTaskController().handleEditStatusTrue)
//Read Retorno
router.get('/task-all', new ReadTaskController().handleAll)
router.get('/task-off', new ReadTaskController().handleAllOff)
router.get('/task-on', new ReadTaskController().handleAllOn)
//Read Contagem
router.post('/count-all-task', new ReadTaskController().handleCountAll)
router.post('/count-off-task', new ReadTaskController().handleCountAllOff)
router.post('/count-on-task', new ReadTaskController().handleCountAllOn)


//ROUTES PROJETC.
router.post('/new-project', new CreateProjectController().handle)
router.post('/delete-project', new DeleteProjectController().handle)
router.post('/project-update-name', new UpdateProjectController().handleEditName)
router.post('/project-update-description', new UpdateProjectController().handleEditDescription)
router.post('/project-update-status', new UpdateProjectController().handleEditStatus)
//Read Retorno
router.get('/project-all', new ReadProjectController().handleAll)
router.get('/project-off', new ReadProjectController().handleAllOff)
router.get('/project-on', new ReadProjectController().handleAllOn)
//Read Contagem
router.post('/count-all-project', new ReadProjectController().handleCountAll)
router.post('/count-off-project', new ReadProjectController().handleCountAllOff)
router.post('/count-on-project', new ReadProjectController().handleCountAllOn)





export { router }