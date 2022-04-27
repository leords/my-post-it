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

// Routes user.
router.post('/new-user', new CreateUserController().handle) //ok
router.get('/user-all', new ReadUserController().handleAll) //ok
router.get('/user-unique', new ReadUserController().handleUnique) //ok
router.post('/edit-user', new UpdateUserController().handleEditName) //ok
router.post('/delete-user', new DeleteUserController().handle) //ok

// Routes task.
router.post('/new-task', new CreateTaskController().handle) //ok
router.post('/delete-task', new DeleteTaskController().handle) //ok
router.get('/task-all', new ReadTaskController().handleAll) //ok
router.get('/task-off', new ReadTaskController().handleAllOff) //ok
router.get('/task-on', new ReadTaskController().handleAllOn) //ok
router.get('/edit-task', new UpdateTaskController().handleEditStatusFalse) //ok
router.get('/edit-task', new UpdateTaskController().handleEditStatusTrue) //ok

// Routes project. - fazer o conhecimento de qual variavel teve alteração na route /project-update
router.post('/new-project', new CreateProjectController().handle)
router.post('/delete-project', new DeleteProjectController().handle)
router.get('/project-all', new ReadProjectController().handleAll)
router.get('/project-off', new ReadProjectController().handleAllOff)
router.get('/project-on', new ReadProjectController().handleAllOn)
router.post('/project-update', new UpdateProjectController().handle)





export { router }