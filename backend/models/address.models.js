import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  fullName: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
    minlength: 10,
    unique: true
  },
  pinCode: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true
  },
  town: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  isHome: {
    type: Boolean,
    required: true,
    default: true
  },
  isDefaultAddress: {
    type: Boolean,
    required: true,
    default: false
  }

})

const Address = mongoose.model("Address", addressSchema);

export default Address;