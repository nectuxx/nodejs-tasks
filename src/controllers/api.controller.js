import { validationResult } from 'express-validator';
import httpStatus from 'http-status';
import _ from 'lodash';
import usersModel from '../models/users.model';
import productsModel from '../models/products.model';
import promotionsModel from '../models/promotions.model';
import cartModel from '../models/cart.model';
import mongoose from 'mongoose'

const objectController = () => {

	const productList = async (req, res) => {
		try {
			let errors = validationResult(req);
			if (!errors.isEmpty()) {
				throw errors.array();
			}
			let userInput = req.query;
			console.log("userInput-------userInput",userInput)
			let query = {isDeleted: false};
			if (userInput._id) {
				query._id = userInput._id;
			}
			if (userInput.name) {
				query.name = userInput.name;
			}
			let productData = await productsModel.find(query).lean();
			return res.status(httpStatus.OK).json({ status: httpStatus.OK, msg: "Success", data: productData });
		} catch (err) {
			console.log("err--:",err);
			if (!err.statusCode) {
				err.statusCode = httpStatus.BAD_REQUEST;
			}
			return res.status(err.statusCode).json(err);
		}
	};

	const checkCartProduct = async (cartObj) => {
		const cartItem = await cartModel.findOne({
			productId: cartObj.productId,
			userId: cartObj.userId
		}).populate([
			{
				"path": 'productId',
				"select": '_id price'
			}
		]).lean();
		if (cartItem) {
			console.log("cartItem-------",cartItem);
			cartObj.qty += cartItem.qty;
			cartObj.totalPrice = cartObj.qty * cartItem.productId.price;
		} else {
			const productData = await productsModel.findOne({
				_id: cartObj.productId
			}).lean();
			cartObj.totalPrice = cartObj.qty * productData.price;
		}
	}

	const applyProductPromotion = async (cartObj) => {
		let promotion = await promotionsModel.findOne({
			productId: cartObj.productId,
			promotionType: 'product'
		}).lean();
		if (promotion && (cartObj.qty >= promotion.promotionQty)) {
			cartObj.totalDiscount = Math.floor(cartObj.qty/promotion.promotionQty) * promotion.promotionValue;
			cartObj.totalPrice = cartObj.totalPrice - cartObj.totalDiscount;
		}
	}

	const applyCartPromotion = async (cartData) => {
		let promotion = await promotionsModel.findOne({
			promotionType: 'cart'
		}).lean();
		if (promotion && cartData.cartTotalAmount > promotion.promotionAmount) {
			console.log("cartData---------",cartData);
			cartData.cartTotalAmount -= promotion.promotionValue;
			cartData.cartTotalDiscount += promotion.promotionValue;
		}
	}

	const addToCart = async (req, res) => {
		try {
			let errors = validationResult(req);
			if (!errors.isEmpty()) {
				throw errors.array();
			}
			let payload = req.body;
			await checkCartProduct(payload);
			console.log("payload------1",payload);
			await applyProductPromotion(payload);
			console.log("payload------2",payload);
			if (payload._id) delete payload._id;
			await cartModel.findOneAndUpdate({
				productId: payload.productId,
				userId: payload.userId
			}, {
				$set: payload,
			}, {
				upsert: true,
				new: true,
				setDefaultsOnInsert: true,
				runValidators: true
			});
			return res.status(httpStatus.OK).json({ status: httpStatus.OK, msg: "Product added to cart successfully" });
		} catch (err) {
			console.log("err--:",err);
			if (!err.statusCode) {
				err.statusCode = httpStatus.BAD_REQUEST;
			}
			return res.status(err.statusCode).json(err);
		}
	};

	const cartList = async (req, res) => {
		try {
			let errors = validationResult(req);
			if (!errors.isEmpty()) {
				throw errors.array();
			}
			let userInput = req.query;
			console.log("userInput-------userInput",userInput)
			let query = {isDeleted: false};
			if (userInput.userId) {
				query.userId = userInput.userId;
			}
			let cartData = await cartModel.aggregate([
				{
					$group: {
						_id: null,
						items: { $push: "$$ROOT" },
						cartTotalAmount: { $sum: "$totalPrice" },
						cartTotalDiscount: { $sum: "$totalDiscount" }
					}
				}
			]);
			if (cartData && cartData[0]) {
				cartData = cartData[0];
				delete cartData._id;
				await applyCartPromotion(cartData);
			}
			return res.status(httpStatus.OK).json({ status: httpStatus.OK, msg: "Success", data: cartData });
		} catch (err) {
			console.log("err--:",err);
			if (!err.statusCode) {
				err.statusCode = httpStatus.BAD_REQUEST;
			}
			return res.status(err.statusCode).json(err);
		}
	};

	const deleteCart = async (req, res) => {
		try {
			let errors = validationResult(req);

			if (!errors.isEmpty()) {
				throw errors.array();
			}
			
			let payload = req.body;
			
			return res.status(httpStatus.OK).json({ status: httpStatus.OK, msg: "Success" });
			
		} catch (err) {
			console.log("errr===>", err);
			if (!err.statusCode) {
				err.statusCode = httpStatus.BAD_REQUEST;
			}
			return res.status(err.statusCode).json(err);
		}
	}

	return {
		productList,
		addToCart,
		cartList,
		deleteCart
	};
}
export default objectController();

