import { Router } from 'express';
import { isAllowed } from '../utils/middlewares';
import { sinkData } from '../controllers/sink.controller';
import { transform } from '../controllers/transform.controller';


const router: Router = Router();

router.post('/sink-data', isAllowed, sinkData);
router.get('/get-by-type', transform);

export default router;
