import _ from "lodash";
import express from "express";

import apiRoutes from "./api.route";

const router = express.Router(); 

router.get("/healthCheck", (req, res) => res.send("OK"));


router.use("/v1", apiRoutes);


export default router;
