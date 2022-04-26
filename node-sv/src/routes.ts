import { Router } from "express";
import { CreateProjectController } from "./controllers/project/CreateProjectController";
import { DeleteProjectController } from "./controllers/project/DeleteProjectController";
import { ReadProjectController } from "./controllers/project/ReadProjectController";
import { UpdateProjectController } from "./controllers/project/UpdateProjectController";
import { AuthLoginUserController } from "./controllers/user/AuthLoginUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";


const router = Router();

// Routes user.
router.post('/new-user', new CreateUserController().handle ) //ok


// Routes project.
router.post('/new-project', new CreateProjectController().handle ) //ok
router.post('/delete-project', new DeleteProjectController().handle ) //ok

router.get('/project-all', new ReadProjectController().handleAll ) //ok
router.get('/project-off', new ReadProjectController().handleAllOff ) //ok
router.get('/project-on', new ReadProjectController().handleAllOn ) //ok

router.post('/project-update', new UpdateProjectController().handle) //ok - apenas fazer o conhecimento de qual variavel teve alteração.



export { router }