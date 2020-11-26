import mongoose from 'mongoose'
// job trigger history table Schema
const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productModel",
        required: true
    },
    qty: { type: Number, default: 1 },
    totalPrice: { type: Number},
    totalDiscount: { type: Number},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userModel",
        required: true
    },
    created: { type: Date, default: Date.now  },
    lastModified: { type: Date, default: Date.now  },
    isDeleted: { type: Boolean , default: false }
}, { collection: 'cart' });

export default mongoose.model('cartModel', cartSchema);

//role - "admin", "dataEntryOpe", "developer", "user"