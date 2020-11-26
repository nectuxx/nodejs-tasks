import mongoose from 'mongoose'
// job trigger history table Schema
const productSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    description: { type: String},
    promotionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "promotionModel"
    },
    price: { type: Number},
    created: { type: Date, default: Date.now  },
    lastModified: { type: Date, default: Date.now  },
    isActive: { type: Boolean , default: true },
    isDeleted: { type: Boolean , default: false }
}, { collection: 'products' });

export default mongoose.model('productModel', productSchema);