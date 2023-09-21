import mongoose, { Schema } from "mongoose";

const menuSchema = new Schema (
    {
        title: String,
        description: String,
        type: String,
        price: String,
        mprice: String,
        lprice: String,
        xlprice: String, 
    },
    {
        timestamps: true,
    }
);

const Item = mongoose.models.Item || mongoose.model("Item", menuSchema);

export default Item;