"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateProjectController_1 = require("./controllers/project/CreateProjectController");
const DeleteProjectController_1 = require("./controllers/project/DeleteProjectController");
const ReadProjectController_1 = require("./controllers/project/ReadProjectController");
const UpdateProjectController_1 = require("./controllers/project/UpdateProjectController");
const CreateTaskController_1 = require("./controllers/task/CreateTaskController");
const DeleteTaskController_1 = require("./controllers/task/DeleteTaskController");
const ReadTaskController_1 = require("./controllers/task/ReadTaskController");
const UpdateTaskController_1 = require("./controllers/task/UpdateTaskController");
const AuthLoginUserController_1 = require("./controllers/user/AuthLoginUserController");
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const DeleteUserController_1 = require("./controllers/user/DeleteUserController");
const ReadUserController_1 = require("./controllers/user/ReadUserController");
const UpdateUserController_1 = require("./controllers/user/UpdateUserController");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/auth', new AuthLoginUserController_1.AuthLoginUserController().handle);
//ROUTES USER.
router.post('/new-user', new CreateUserController_1.CreateUserController().handle);
router.post('/edit-user', new UpdateUserController_1.UpdateUserController().handleEditName);
router.post('/delete-user', new DeleteUserController_1.DeleteUserController().handle);
//Read Retorno
router.get('/user-all', new ReadUserController_1.ReadUserController().handleAll);
router.post('/user-unique', new ReadUserController_1.ReadUserController().handleUnique);
//ROUTES TASK.
router.post('/new-task', new CreateTaskController_1.CreateTaskController().handle);
router.post('/delete-task', new DeleteTaskController_1.DeleteTaskController().handle);
router.post('/edit-task-name', new UpdateTaskController_1.UpdateTaskController().handleEditName);
router.post('/edit-task-description', new UpdateTaskController_1.UpdateTaskController().handleEditDescription);
router.post('/edit-task-f', new UpdateTaskController_1.UpdateTaskController().handleEditStatusFalse);
router.post('/edit-task-t', new UpdateTaskController_1.UpdateTaskController().handleEditStatusTrue);
//Read Retorno
router.post('/task-all', new ReadTaskController_1.ReadTaskController().handleAll);
router.post('/task-off', new ReadTaskController_1.ReadTaskController().handleAllOff);
router.post('/task-on', new ReadTaskController_1.ReadTaskController().handleAllOn);
//Read Contagem
router.post('/count-all-task', new ReadTaskController_1.ReadTaskController().handleCountAll);
router.post('/count-off-task', new ReadTaskController_1.ReadTaskController().handleCountAllOff);
router.post('/count-on-task', new ReadTaskController_1.ReadTaskController().handleCountAllOn);
//ROUTES PROJETC.
router.post('/new-project', new CreateProjectController_1.CreateProjectController().handle);
router.post('/delete-project', new DeleteProjectController_1.DeleteProjectController().handle);
router.post('/project-update-name', new UpdateProjectController_1.UpdateProjectController().handleEditName);
router.post('/project-update-description', new UpdateProjectController_1.UpdateProjectController().handleEditDescription);
router.post('/project-update-status', new UpdateProjectController_1.UpdateProjectController().handleEditStatus);
//Read Retorno
router.post('/project-unique', new ReadProjectController_1.ReadProjectController().handleUnique);
router.post('/project-all', new ReadProjectController_1.ReadProjectController().handleAll);
router.post('/project-off', new ReadProjectController_1.ReadProjectController().handleAllOff);
router.post('/project-on', new ReadProjectController_1.ReadProjectController().handleAllOn);
//Read Contagem
router.post('/count-all-project', new ReadProjectController_1.ReadProjectController().handleCountAll);
router.post('/count-off-project', new ReadProjectController_1.ReadProjectController().handleCountAllOff);
router.post('/count-on-project', new ReadProjectController_1.ReadProjectController().handleCountAllOn);
