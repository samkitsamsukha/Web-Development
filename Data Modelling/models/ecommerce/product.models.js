import mongoose from "mongoose";

const productschema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
        name: {
            types: String,
            required: true,
        },
        // Images can be stored in a buffer format by mongoDB but it is advised not to do that as it increases load on the system
        productImage: {
            type: String,
        },
        price: {
            type: Number,
            default: 0,
        },
        stock: {
            type: Number,
            default: 0,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {timestamps: true,}
);

export const Product = mongoose.model('Product', productSchema);