import express from 'express';
import { findAll, findCategory } from '../controllers/item.js';

const router = express.Router();

router.get('/', findAll);
router.get('/find/:id', findCategory);


export default router;