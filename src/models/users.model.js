import mongoose from 'mongoose'
// job trigger history table Schema
const userSchema = new mongoose.Schema({
    name: { type: String},
    emailId: { type: String},
    password: { type: String},
    mobileNumber: { type: String},
    created: { type: Date, default: Date.now  },
    lastModified: { type: Date, default: Date.now  },
    isActive: { type: Boolean , default: true },
    isDeleted: { type: Boolean , default: false }
}, { collection: 'users' });

export default mongoose.model('userModel', userSchema);