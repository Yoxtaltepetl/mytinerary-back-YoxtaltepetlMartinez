import { Router } from "express";
import { allCities, cityById } from "../controllers/cities/read.js";
import { create, createMany } from "../controllers/cities/create.js";

const router = Router();

router.get('/all', allCities);
router.get('/id/:id', cityById);
router.post('/create',create);
router.post('/createMany', createMany);

export default router;