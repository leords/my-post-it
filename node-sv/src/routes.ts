import { Router } from "express";
import { CreateProjectController } from "./controllers/project/CreateProjectController";
import { DeleteProjectController } from "./controllers/project/DeleteProjectController";
import { ReadProjectController } from "./controllers/project/ReadProjectController";
import { UpdateProjectController } from "./controllers/project/UpdateProjectController";


const router = Router();


// Routes project.
router.post('/new-project', new CreateProjectController().handle )

router.post('/delete-project', new DeleteProjectController().handle )

router.get('/project-all', new ReadProjectController().handleAll )
router.get('/project-off', new ReadProjectController().handleAllOff )
router.get('/project-on', new ReadProjectController().handleAllOn )

router.post('/update', new UpdateProjectController().handle)



export { router }