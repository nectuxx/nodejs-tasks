import mongoose from 'mongoose'
// job trigger history table Schema
const promotionSchema = new mongoose.Schema({
    name: { type: String},
    description: { type: String},
    promotionCode: { type: String},
	promotionType: {
		type: String,
		enum: ['product', 'cart']
	},
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productModel'
    },
    promotionQty: { type: Number},
    promotionAmount: { type: Number},
    promotionValue: { type: Number},
    startDate: { type: Date, default: Date.now  },
    endDate: { type: String},
    updatedBy: { type: String},
    created: { type: Date, default: Date.now  },
    lastModified: { type: Date, default: Date.now  },
    isActive: { type: Boolean , default: true },
    isDeleted: { type: Boolean , default: false }
}, { collection: 'promotions' });

export default mongoose.model('promotionModel', promotionSchema);