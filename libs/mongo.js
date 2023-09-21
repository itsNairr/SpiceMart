// import mongoose from "mongoose";

// let connection = null;

// const connectMongoDB = async () => {
//     try {
//         if (connection == null) {
//             connection = await mongoose.connect(process.env.MONGODB_URI);
//             console.log("Connected");
//         } //else {
//         //     console.log("Reused existing connection");
//         // }
//     } catch (error) {
//         console.log("Error", error);
//         throw error;
//     }
// }

// export default connectMongoDB;


import mongoose from 'mongoose';

let connection = null;

export const connectMongoDB = async () => {
    try {
        if (connection == null) {
            connection = await mongoose.connect(process.env.MONGODB_URI);
        }
    } catch (error) {
        console.log("Error", error);
        throw error;
    }
}

export const closeMongoDB = async () => {
    try {
        if (connection != null) {
            await mongoose.connection.close();
            connection = null;
        }
    } catch (error) {
        console.log("Error", error);
        throw error;
    }
}
