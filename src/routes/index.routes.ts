import { Router } from "express";

import { objectRoutes } from "../modules/object/routes/object.routes";

const router = Router();

router.use("/object", objectRoutes);

export { router };
