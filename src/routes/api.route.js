import express from "express";
import { check, oneOf } from "express-validator";
import apiCtrl from "../controllers/api.controller";

const router = express.Router();

router
    .get("/productList", [], apiCtrl.productList)

    .post("/addToCart", [
		check('productId').not().isEmpty().withMessage('productId is required'),
		check('userId').not().isEmpty().withMessage('userId is required'),
    ], apiCtrl.addToCart)
    
	.get("/cartList", [
		check('userId').not().isEmpty().withMessage('userId is required')
	], apiCtrl.cartList)

	.post("/deleteCart", [
		check('_id').not().isEmpty().withMessage('_id is required')
	], apiCtrl.deleteCart);

export default router;
