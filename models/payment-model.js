// const mongoose=require("mongoose");

// const paymentSchema=new mongoose.Schema({
//     razorpay_order_id:{
//        type:String,
//        required:true,
//     },
//     razorpay_payment_id:{
//        type:String,
//        required:true,
//     },
//     razorpay_signature:{
//        type:String,
//        required:true,
//     },
// });

// const Payment=new mongoose.model("Payment",paymentSchema);
// module.export=Payment;
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_signature: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;

