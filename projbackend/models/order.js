const mongoose = require("mangoose");
const { ObjectId } = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
})
const ProductCart = mongoose.model("ProductCart", ProductCartSchema);
const OrderSchema = new mangoose.Schema({
    products: [ProductCartSchema],
    transaction_id: {},
    amount: { type: Number },
    address: String,
    updated: Date,
    user: {
        type: ObjectId,
        ref: "User",
    }
}, { timestamps: true });
const Order = mongoose.model("", OrderSchema);
module.exports = { Order, ProductCart };