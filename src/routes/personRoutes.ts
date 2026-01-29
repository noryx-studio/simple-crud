import { Router } from 'express';
import * as personCtrl from '../controllers/personController';

const router = Router();

router.get('/', personCtrl.getPersons);
router.post('/', personCtrl.createPerson);
router.put('/:id', personCtrl.updatePerson);
router.delete('/:id', personCtrl.deletePerson);

export default router;