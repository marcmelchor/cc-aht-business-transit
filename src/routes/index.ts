import { Router } from 'express';
import { isAllowed } from '../utils/middlewares';
import { sinkData } from '../controllers/sink.controller';


const router: Router = Router();

router.post('/sink-data', isAllowed, sinkData);

export default router;
